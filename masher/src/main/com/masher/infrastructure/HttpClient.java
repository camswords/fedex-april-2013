package com.masher.infrastructure;

import com.google.common.io.CharStreams;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientHandlerException;
import com.sun.jersey.api.client.ClientResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStreamReader;

@Component
public class HttpClient {

    public HttpResponse get(String url, String accept) {
        try {
            Client client = Client.create();
            client.setConnectTimeout(2000);
            client.setReadTimeout(2000);

            ClientResponse response = client.resource(url)
                    .accept(accept)
                    .get(ClientResponse.class);

            String contentReceived = CharStreams.toString(new InputStreamReader(response.getEntityInputStream(), "UTF-8"));
            return new HttpResponse(response.getStatus(), contentReceived);

        } catch (IOException e) {
            throw new RuntimeException("failed to get url " + url, e);
        } catch (ClientHandlerException e) {
            throw new RuntimeException("failed to connect to server hosting url " + url, e);
        }
    }
}
