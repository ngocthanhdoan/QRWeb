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
	private static Map<String, IdentityCard> cardDatabase = new HashMap<>();

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
	public void saveImage(String idPassport, BufferedImage image) {
        try {
            File outputFile = new File("images/" + idPassport + ".png");
            ImageIO.write(image, "png", outputFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
