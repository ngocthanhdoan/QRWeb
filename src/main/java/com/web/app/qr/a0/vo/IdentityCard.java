package com.web.app.qr.a0.vo;

import java.awt.image.BufferedImage;

import org.json.JSONObject;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class IdentityCard {
	private String idIdentityCard; // ID căn cước công dân
	private String idPassport; // ID chứng minh nhân dân
	private String fullname;
	private String birthDate;
	private String gender;
	private String address;
	private String issueDate;
	@JsonIgnore
	private BufferedImage image;

	// Constructor, Getters, and Setters
	public IdentityCard(String idIdentityCard, String idPassport, String fullname, String birthDate, String gender,
			String address, String issueDate, BufferedImage image) {
		this.idIdentityCard = idIdentityCard;
		this.idPassport = idPassport;
		this.fullname = fullname;
		this.birthDate = birthDate;
		this.gender = gender;
		this.address = address;
		this.issueDate = issueDate;
		this.image = image;
	}

	public IdentityCard(String idIdentityCard, String idPassport, String fullname, String birthDate, String gender,
			String address, String issueDate) {
		this.idIdentityCard = idIdentityCard;
		this.idPassport = idPassport;
		this.fullname = fullname;
		this.birthDate = birthDate;
		this.gender = gender;
		this.address = address;
		this.issueDate = issueDate;

	}

	// Getters and Setters
	public String getIdIdentityCard() {
		return idIdentityCard;
	}

	public void setIdIdentityCard(String idIdentityCard) {
		this.idIdentityCard = idIdentityCard;
	}

	public String getIdPassport() {
		return idPassport;
	}

	public void setIdPassport(String idPassport) {
		this.idPassport = idPassport;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}

	public BufferedImage getImage() {
		return image;
	}

	public void setImage(BufferedImage image) {
		this.image = image;
	}

	public JSONObject toJson() {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("id_identity_card", idIdentityCard);
		jsonObject.put("id_passport", idPassport);
		jsonObject.put("fullname", fullname);
		jsonObject.put("birth_date", birthDate);
		jsonObject.put("gender", gender);
		jsonObject.put("address", address);
		jsonObject.put("issue_date", issueDate);
		return jsonObject;
	}
}
