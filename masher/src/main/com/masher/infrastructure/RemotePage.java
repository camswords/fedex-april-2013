package com.masher.infrastructure;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.core.MediaType;

@Component
public class RemotePage {

    private HttpClient httpClient;

    @Autowired
    public RemotePage(HttpClient httpClient) {
        this.httpClient = httpClient;
    }

    public String fetch(String url) {
        HttpResponse httpResponse = httpClient.get(url, MediaType.TEXT_HTML);

        if (httpResponse.isNotOk()) {
            throw new RuntimeException("failed to retrieve page from url " + url);
        }

        return httpResponse.getBody();
    }
}
