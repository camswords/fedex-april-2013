package com.masher.application;

import com.masher.infrastructure.Template;
import com.masher.infrastructure.TemplateProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Component
@Path("/")
public class HomePageResource {

    private final TemplateProvider templateProvider;

    @Autowired
    public HomePageResource(TemplateProvider templateProvider) {
        this.templateProvider = templateProvider;
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    public Response show() {

        Template template = templateProvider.getTemplate("homePage");

        return Response.ok().entity(template.render()).build();
    }
}
