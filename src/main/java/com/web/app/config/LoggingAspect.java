package com.web.app.config;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
@Aspect
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    // Variable to store start time
    private ThreadLocal<Long> startTime = new ThreadLocal<>();

    @Before("execution(* com.web.app.qr.a0.trx..*(..))")
    public void logBefore(JoinPoint joinPoint) {
        // Record the start time of the method
        startTime.set(System.currentTimeMillis());
        logger.info("Started method: {} in class: {} with arguments: {}",
            joinPoint.getSignature().toShortString(),
            joinPoint.getTarget().getClass().getSimpleName(),
            joinPoint.getArgs());
    }

    @AfterReturning(pointcut = "execution(* com.web.app.qr.a0.trx..*(..))", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        // Calculate elapsed time
        long elapsedTime = System.currentTimeMillis() - startTime.get();
        try {
            logger.info("Completed method: {} in class: {} with result: {} and elapsed time: {} ms",
                joinPoint.getSignature().toShortString(),
                joinPoint.getTarget().getClass().getSimpleName(),
                new ObjectMapper().writeValueAsString(result),
                elapsedTime);
        } catch (JsonProcessingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @AfterThrowing(pointcut = "execution(* com.web.app.qr.a0.trx..*(..))", throwing = "exception")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable exception) {
        // Calculate elapsed time
        long elapsedTime = System.currentTimeMillis() - startTime.get();
        logger.error("Exception in method: {} in class: {} with message: {} and elapsed time: {} ms",
            joinPoint.getSignature().toShortString(),
            joinPoint.getTarget().getClass().getSimpleName(),
            exception.getMessage(),
            elapsedTime);
    }

    @After("execution(* com.web.app.qr.a0.trx..*(..))")
    public void cleanUp() {
        // Clean up the thread-local variable
        startTime.remove();
    }
}
