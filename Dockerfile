# Stage 1: Build
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean install

# Stage 2: Package
FROM eclipse-temurin:21
RUN apt-get update && apt-get install -y tesseract-ocr \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY  --from=build /app/target/QRWeb-0.0.1.jar qr-web-app.jar

# Copy the resources directory to keep the structure
COPY src/main/resources /app/src/main/resources

EXPOSE 8080
CMD ["java", "-jar", "qr-web-app.jar"]
