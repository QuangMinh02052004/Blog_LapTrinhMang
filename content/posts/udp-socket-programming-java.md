---
title: "UDP Socket Programming trong Java"
date: 2025-10-13
draft: false
tags: ["Java", "UDP", "Datagram"]
categories: ["Java"]
description: "Tìm hiểu về UDP Socket trong Java"
---

## UDP Protocol

UDP (User Datagram Protocol) là giao thức không hướng kết nối, nhanh hơn TCP nhưng không đảm bảo tin cậy.

## DatagramSocket

```java
import java.net.*;

public class UDPServer {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket(9876);
        byte[] buffer = new byte[1024];
        
        DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
        socket.receive(packet);
        
        String message = new String(packet.getData(), 0, packet.getLength());
        System.out.println("Received: " + message);
        
        socket.close();
    }
}
```

## Kết Luận

UDP phù hợp cho streaming, gaming và các ứng dụng real-time.
