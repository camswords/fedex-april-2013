package com.masher.infrastructure;

public class Link {
    
    private String rel;
    private String href;
    private String type;

    public String getRel() {
        return rel;
    }

    public String getHref() {
        return href;
    }

    public String getType() {
        return type;
    }

    @Override
    public String toString() {
        return "{ rel: " + rel + ", href: " + href + ", type: " + type + "}";
    }
}
