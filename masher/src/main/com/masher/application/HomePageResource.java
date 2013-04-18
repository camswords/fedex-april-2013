package com.masher.application;

import com.masher.infrastructure.RemotePage;
import com.masher.infrastructure.Template;
import com.masher.infrastructure.TemplateProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Component
@Path("/")
public class HomePageResource {

    private final TemplateProvider templateProvider;
    private final RemotePage remotePage;

    @Autowired
    public HomePageResource(TemplateProvider templateProvider, RemotePage remotePage) {
        this.templateProvider = templateProvider;
        this.remotePage = remotePage;
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    public Response show() {
        Template template = templateProvider.getTemplate("homePage");
        template.put("remote", remotePage);

        return Response.ok().entity(template.render()).build();
    }
}
