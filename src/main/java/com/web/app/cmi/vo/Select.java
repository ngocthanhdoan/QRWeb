package com.web.app.cmi.vo;

public class Select {
    private String code;

    private String name;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static Select create(String code, String name) {
        Select select = new Select();
        select.setCode(code);
        select.setName(name);
        return select;
    }

}
