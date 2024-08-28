package com.web.app.plugins;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.imageio.ImageIO;

import com.web.app.qr.a0.vo.IdentityCard;

public class IdentityCardManager {
	private Map<String, IdentityCard> cardDatabase = new HashMap<>();

	public IdentityCard getCard(String idPassport) {
		return cardDatabase.get(idPassport);
	}

	public void addOrUpdateCard(IdentityCard card) {
		cardDatabase.put(card.getIdPassport(), card);
	}

	public void removeCard(String idPassport) {
		cardDatabase.remove(idPassport);
	}

	public Collection<IdentityCard> getAllCards() {
		return cardDatabase.values();
	}

	public IdentityCard getIdentityCard(String idIdentityCard) {
		for (String key : cardDatabase.keySet()) {
			IdentityCard card = cardDatabase.get(key);
			if (card.getIdIdentityCard().equals(idIdentityCard)) {
				return card;
			}
		}
		return null;
	}

	public void saveImage(String idPassport, BufferedImage image) {
		try {
			File outputFile = new File("images/" + idPassport + ".png");
			ImageIO.write(image, "png", outputFile);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
