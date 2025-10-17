---
title: "Xây Dựng TCP Client-Server với Java"
date: 2025-10-14
draft: false
tags: ["Java", "TCP", "Client-Server", "Network Programming"]
categories: ["Java"]
description: "Hướng dẫn chi tiết cách xây dựng ứng dụng TCP Client-Server bằng Java"
---

## TCP Protocol

TCP (Transmission Control Protocol) là giao thức truyền thông hướng kết nối, đảm bảo dữ liệu được truyền đi tin cậy và theo thứ tự.

## Xây Dựng TCP Server

```java
import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server đang lắng nghe...");
        
        Socket clientSocket = serverSocket.accept();
        BufferedReader in = new BufferedReader(
            new InputStreamReader(clientSocket.getInputStream()));
        PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
        
        String message = in.readLine();
        System.out.println("Client: " + message);
        out.println("Server đã nhận: " + message);
        
        clientSocket.close();
        serverSocket.close();
    }
}
```

## Xây Dựng TCP Client

```java
import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 8080);
        
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(
            new InputStreamReader(socket.getInputStream()));
        
        out.println("Hello Server!");
        String response = in.readLine();
        System.out.println("Server: " + response);
        
        socket.close();
    }
}
```

## Kết Luận

TCP là nền tảng cho nhiều giao thức mạng. Hiểu rõ TCP giúp bạn xây dựng ứng dụng mạng tin cậy.
