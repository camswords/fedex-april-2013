package com.masher.infrastructure;

import java.io.InputStream;

public interface ResourceProvider {

    InputStream getResource(String path);

}
