package com.web.app.qr.a0.modun;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class QRA0_0101_mod {
	private static final String DOCKER_HUB_LOGIN_URL = "https://hub.docker.com/v2/users/login/";
	private String USERNAME;
	private String PASSWORD;
	private String token;
 
	public String getUSERNAME() {
		return USERNAME;
	}

	public void setUSERNAME(String uSERNAME) {
		USERNAME = uSERNAME;
	}

	public String getPASSWORD() {
		return PASSWORD;
	}

	public void setPASSWORD(String pASSWORD) {
		PASSWORD = pASSWORD;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public QRA0_0101_mod(String token) {
		this.token = token;
	}

	public QRA0_0101_mod(String username, String password) {
		this.USERNAME = username;
		this.PASSWORD = password;		
	}

	public String login() throws Exception {
		HttpClient client = HttpClient.newHttpClient();
		String requestBody = String.format("{\"username\": \"%s\", \"password\": \"%s\"}", USERNAME, PASSWORD);

		HttpRequest request = HttpRequest.newBuilder().uri(new URI(DOCKER_HUB_LOGIN_URL))
				.header("Content-Type", "application/json").POST(HttpRequest.BodyPublishers.ofString(requestBody))
				.build();

		HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
		ObjectMapper mapper = new ObjectMapper();
		JsonNode jsonNode = mapper.readTree(response.body());
		System.out.println(response.body());
		this.token = jsonNode.get("token").asText();

		System.out.println("Login token: " + token);
		return token;
	}

	public String getRepositories() throws Exception {
		HttpClient client = HttpClient.newHttpClient();
		String repositoriesUrl = "https://hub.docker.com/v2/repositories/" + USERNAME + "/";

		HttpRequest request = HttpRequest.newBuilder().uri(new URI(repositoriesUrl))
				.header("Authorization", "JWT " + token).GET().build();

		HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
		System.out.println("Repositories: " + response.body());
		return response.body();
	}

	public String getRepositoryDetails(String repositoryName) throws Exception {
		HttpClient client = HttpClient.newHttpClient();
		String repoDetailUrl = String.format("https://hub.docker.com/v2/repositories/" + USERNAME + "/%s/",
				repositoryName);

		HttpRequest request = HttpRequest.newBuilder().uri(new URI(repoDetailUrl))
				.header("Authorization", "JWT " + token).GET().build();

		HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
		System.out.println("Repository details: " + response.body());
		return response.body();
	}

	public String deleteImage(String repositoryName, String tag) throws Exception {
		HttpClient client = HttpClient.newHttpClient();

		// Lấy digest của image
		String tagDetailUrl = String.format("https://hub.docker.com/v2/repositories/" + USERNAME + "/%s/tags/%s/",
				repositoryName, tag);
		HttpRequest tagRequest = HttpRequest.newBuilder().uri(new URI(tagDetailUrl))
				.header("Authorization", "JWT " + token).GET().build();

		HttpResponse<String> tagResponse = client.send(tagRequest, HttpResponse.BodyHandlers.ofString());
		ObjectMapper mapper = new ObjectMapper();
		JsonNode jsonNode = mapper.readTree(tagResponse.body());
		String digest = jsonNode.get("digest").asText();

		System.out.println("Digest: " + digest);

		// Xóa image
		String deleteImageUrl = String.format("https://hub.docker.com/v2/repositories/" + USERNAME + "/%s/tags/%s/",
				repositoryName, digest);
		HttpRequest deleteRequest = HttpRequest.newBuilder().uri(new URI(deleteImageUrl))
				.header("Authorization", "JWT " + token).DELETE().build();

		HttpResponse<String> deleteResponse = client.send(deleteRequest, HttpResponse.BodyHandlers.ofString());
		System.out.println("Delete response: " + deleteResponse.statusCode());
		return "" + deleteResponse.statusCode();
	}

	public static void main(String[] args) {
		QRA0_0101_mod a = new QRA0_0101_mod("", "");
		try {
			a.login();
			a.getRepositories();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}