# Stage 1: Build
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean install

# Stage 2: Package
FROM eclipse-temurin:21
WORKDIR /app
COPY  --from=build /app/target/QRWeb-0.0.1.jar qr-web-app.jar
EXPOSE 8082
CMD ["java", "-jar", "qr-web-app.jar"]