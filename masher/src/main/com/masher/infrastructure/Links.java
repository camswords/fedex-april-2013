package com.masher.infrastructure;

import org.apache.commons.lang.StringUtils;

import java.util.List;

public class Links {

    private List<Link> links;

    public Links(List<Link> links) {
        this.links = links;
    }

    public Link getLinkRelatingTo(String name) {
        for (Link link : links) {
            if (name.equals(link.getRel())) {
                return link;
            }
        }
        
        throw new RuntimeException("failed to find link with rel " + name + " in " + this.toString());
    }

    @Override
    public String toString() {
        return StringUtils.join(links, ", ");
    }
}
