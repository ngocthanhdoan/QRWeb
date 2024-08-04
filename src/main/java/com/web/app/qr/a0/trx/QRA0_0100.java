package com.web.app.qr.a0.trx;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.stream.Collectors;

import javax.imageio.ImageIO;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.web.app.plugins.IdentityCardManager;
import com.web.app.qr.a0.modun.QRA0_0100_mod;
import com.web.app.qr.a0.modun.QRA0_0101_mod;
import com.web.app.qr.a0.vo.IdentityCard;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api")
public class QRA0_0100 {
	private QRA0_0100_mod qrProcessor = new QRA0_0100_mod();
	private IdentityCardManager cardManager = new IdentityCardManager();

	@PostMapping("/process-upload")
	@ResponseBody
	public String processUpload(@RequestParam("file") MultipartFile file) {
		JSONObject response = new JSONObject();

		try {
			BufferedImage image = ImageIO.read(file.getInputStream());
			String result = qrProcessor.detectQrCode(image);
			response = new JSONObject(result);

			// Kiểm tra nếu cần cập nhật
			if (response.has("action") && response.getString("action").equals("update")) {
				String idPassport = response.getJSONObject("new_data").getString("id_passport");
				IdentityCard existingCard = cardManager.getCard(idPassport);

				if (existingCard != null) {
					response.put("message", "Information matches with an existing customer.");
					response.put("update_required", true); // Indicate that update is required
					response.put("existing_data", existingCard.toJson()); // Trả về dữ liệu cũ
				}
			} else {
				response.put("update_required", false); // Indicate that no update is required
			}

		} catch (IOException e) {
			response.put("status", "error");
			response.put("message", "Failed to process image: " + e.getMessage());
		}

		return response.toString();
	}

	@PostMapping("/update-card")
	@ResponseBody
	public String updateCard(@RequestBody JSONObject updateRequest) {
		JSONObject response = new JSONObject();

		try {
			String idPassport = updateRequest.getString("id_passport");
			IdentityCard newCard = new IdentityCard(updateRequest.getString("id_identity_card"), idPassport,
					updateRequest.getString("fullname"), updateRequest.getString("birth_date"),
					updateRequest.getString("gender"), updateRequest.getString("address"),
					updateRequest.getString("issue_date") // Image handling not covered here
			);

			cardManager.addOrUpdateCard(newCard);
			response.put("status", "success");
			response.put("message", "Identity card updated successfully.");

		} catch (Exception e) {
			response.put("status", "error");
			response.put("message", "Failed to update card: " + e.getMessage());
		}

		return response.toString();
	}

	@GetMapping("/cards")
	@ResponseBody
	public Collection<IdentityCard> getAllCards() {
		return cardManager.getAllCards();
	}

	@PostMapping("/add-card")
	@ResponseBody
	public String addCard(@RequestBody String cardData) {
		JSONObject response = new JSONObject();
		try {
			// Parse the input string as JSON
			JSONObject cardDataJson = new JSONObject(cardData);

			// Extract parameters from JSON
			String idIdentityCard = cardDataJson.optString("id_identity_card"); // Default value if not found
			String idPassport = cardDataJson.optString("id_passport");
			String fullname = cardDataJson.optString("fullname");
			String birthDate = cardDataJson.optString("birth_date");
			String gender = cardDataJson.optString("gender");
			String address = cardDataJson.optString("address");
			String issueDate = cardDataJson.optString("issue_date");

			// Create IdentityCard object
			IdentityCard newCard = new IdentityCard(idIdentityCard, idPassport, fullname, birthDate, gender, address,
					issueDate

			);
			System.out.println(newCard.toJson().toString());
			// Add or update card information
			cardManager.addOrUpdateCard(newCard);

			response.put("status", "success");
			response.put("message", "Identity card added or updated successfully.");
		} catch (Exception e) {
			response.put("status", "error");
			response.put("message", "Failed to add or update card: " + e.getMessage());
		}

		return response.toString();
	}

	@PostMapping("/delete-card/{idPassport}")
	@ResponseBody
	public String deleteCard(@PathVariable("idPassport") String idPassport) {
		JSONObject response = new JSONObject();

		try {
			// Xóa thông tin căn cước dựa trên ID
			IdentityCard existingCard = cardManager.getCard(idPassport);
			if (existingCard != null) {
				cardManager.removeCard(idPassport);
				response.put("status", "success");
				response.put("message", "Identity card deleted successfully.");
			} else {
				response.put("status", "error");
				response.put("message", "Identity card not found.");
			}
		} catch (Exception e) {
			response.put("status", "error");
			response.put("message", "Failed to delete card: " + e.getMessage());
		}
		return response.toString();
	}

	@GetMapping("/card-image/{idPassport}")
	public void getCardImage(@PathVariable("idPassport") String idPassport, HttpServletResponse response) {
		try {
			// Giả sử hình ảnh được lưu trữ với tên tệp là ID của căn cước công dân
			File imageFile = new File("images/" + idPassport + ".png");

			if (imageFile.exists()) {
				response.setContentType("image/jpeg");
				FileInputStream inputStream = new FileInputStream(imageFile);
				OutputStream outputStream = response.getOutputStream();
				byte[] buffer = new byte[8192];
				int bytesRead;
				while ((bytesRead = inputStream.read(buffer)) != -1) {
					outputStream.write(buffer, 0, bytesRead);
				}
				inputStream.close();
				outputStream.close();
			} else {
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
				response.getWriter().write("Image not found");
			}
		} catch (IOException e) {
			try {
				response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				response.getWriter().write("Failed to retrieve image: " + e.getMessage());
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
	}

	@GetMapping("/card-info-passport/{idPassport}")
	public String getCardPassport(@PathVariable("idPassport") String idPassport, HttpServletResponse response) {
		return cardManager.getCard(idPassport).toJson().toString();
	}

	@GetMapping("/card-info-identity/{idIdentityCard}")
	public String getCardIdentity(@PathVariable("idIdentityCard") String idIdentityCard, HttpServletResponse response) {
		return cardManager.getIdentityCard(idIdentityCard).toJson().toString();
	}

	@PostMapping("/loginDocker")
	@ResponseBody
	public String loginDocker(@RequestBody String data) {
		JSONObject response = new JSONObject();
		QRA0_0101_mod docker = null;
		try {
			// Parse the input string as JSON
			JSONObject cardDataJson = new JSONObject(data);

			// Extract parameters from JSON
			String username = cardDataJson.optString("username"); // Default value if not found
			String password = cardDataJson.optString("password");

			docker = new QRA0_0101_mod(username, password);
			response.append("username", username);
			response.append("password", password);
			response.append("token", docker.getToken());

		} catch (Exception e) {
			// TODO: handle exception
		}
		return response.toString();
	}

	@PostMapping("/getRepositories")
	@ResponseBody
	public String getResonsite(@RequestBody String data) {
		QRA0_0101_mod docker = null;
		try {
			JSONObject cardDataJson = new JSONObject(data);
			String username = cardDataJson.optString("username"); // Default value if not found
			String password = cardDataJson.optString("password");
			docker = new QRA0_0101_mod(username, password);
			return docker.getRepositories();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@GetMapping("/getRepositoryDetails/{repositoryName}")
	@ResponseBody
	public String getResonsite(@RequestBody String data, @PathVariable("repositoryName") String repositoryName) {
		JSONObject response = new JSONObject();
		QRA0_0101_mod docker = null;
		try {
			JSONObject cardDataJson = new JSONObject(data);
			String username = cardDataJson.optString("username"); // Default value if not found
			String password = cardDataJson.optString("password");
			docker = new QRA0_0101_mod(username, password);
			docker.login();
			response.append("data", docker.getRepositoryDetails(repositoryName));
		} catch (Exception e) {
			// TODO: handle exception
		}
		return response.toString();
	}

	@GetMapping("/logs")
	public String getLogs() {
		return "{\"error\": \"Failed to read log file}";
	}
}
