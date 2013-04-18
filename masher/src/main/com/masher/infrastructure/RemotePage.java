package com.masher.infrastructure;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.core.MediaType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class RemotePage {

    private final HttpClient httpClient;
    private final String startingPointUrl;

    @Autowired
    public RemotePage(HttpClient httpClient) {
        this.httpClient = httpClient;
        this.startingPointUrl = "http://localhost:3000/";
    }

    public String fetch(String url, String path) {
        List<String> sections = Arrays.asList(path.split("\\."));

        Links links = getSection(startingPointUrl, MediaType.APPLICATION_JSON);
        Link link = links.getLinkRelatingTo("components");

        for (String section : sections) {
            if (link.getType().equals(MediaType.APPLICATION_JSON)) {
                links = getSection(link.getHref(), link.getType());
                link = links.getLinkRelatingTo(section);
            }
        }

        return getHtml(link.getHref());
    }

    private String getHtml(String url) {
        HttpResponse httpResponse = httpClient.get(url, MediaType.TEXT_HTML);

        if (httpResponse.isNotOk()) {
            throw new RuntimeException("failed to retrieve page from url " + url);
        }

        return httpResponse.getBody();
    }

    private Links getSection(String sectionUrl, String mediaType) {
        HttpResponse httpResponse = httpClient.get(sectionUrl, mediaType);

        if (httpResponse.isNotOk()) {
            throw new RuntimeException("failed to retrieve page from url " + sectionUrl);
        }

        String json = httpResponse.getBody();

        Type collectionType = new TypeToken<ArrayList<Link>>(){}.getType();
        return new Links((List<Link>) new Gson().fromJson(json, collectionType));
    }
}
