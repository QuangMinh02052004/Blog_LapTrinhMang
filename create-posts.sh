#!/bin/bash

# Tạo about page
hugo new about.md

# Tạo các bài viết
hugo new posts/gioi-thieu-socket-programming-java.md
hugo new posts/tcp-client-server-java.md
hugo new posts/udp-socket-programming-java.md
hugo new posts/multithreading-java-network.md
hugo new posts/java-rmi-remote-method-invocation.md
hugo new posts/http-client-java.md
hugo new posts/nodejs-lap-trinh-bat-dong-bo.md
hugo new posts/expressjs-restful-api.md
hugo new posts/websocket-real-time-communication.md
hugo new posts/fetch-api-ajax-javascript.md

echo "Đã tạo tất cả bài viết!"
