package com.web.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.web.app.DirectoryCreator;

@Configuration
public class DirectoryConfig {
	@Bean
	public void createDirectoryBean() {
		String directoryPath = "images";
		DirectoryCreator.createDirectory(directoryPath);
	}
}
