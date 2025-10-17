#!/usr/bin/env python3
import os

posts = {
    "udp-socket-programming-java.md": """---
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
""",

    "multithreading-java-network.md": """---
title: "Multithreading trong Java Network Programming"
date: 2025-10-12
draft: false
tags: ["Java", "Multithreading", "Concurrency"]
categories: ["Java"]
description: "Xử lý nhiều client đồng thời với multithreading"
---

## Tại Sao Cần Multithreading?

Server cần xử lý nhiều client cùng lúc. Multithreading cho phép mỗi client được xử lý trên thread riêng.

## Thread Pool Pattern

```java
import java.util.concurrent.*;

ExecutorService pool = Executors.newFixedThreadPool(10);

ServerSocket server = new ServerSocket(8080);
while (true) {
    Socket client = server.accept();
    pool.execute(new ClientHandler(client));
}
```

## Kết Luận

Multithreading giúp server xử lý nhiều kết nối hiệu quả.
""",

    "java-rmi-remote-method-invocation.md": """---
title: "Java RMI - Remote Method Invocation"
date: 2025-10-11
draft: false
tags: ["Java", "RMI", "Distributed Systems"]
categories: ["Java"]
description: "Gọi phương thức từ xa với Java RMI"
---

## Java RMI

RMI cho phép gọi phương thức của object trên máy khác như gọi local method.

## Remote Interface

```java
import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Calculator extends Remote {
    int add(int a, int b) throws RemoteException;
}
```

## Kết Luận

RMI đơn giản hóa việc xây dựng ứng dụng phân tán trong Java.
""",

    "http-client-java.md": """---
title: "HTTP Client trong Java với HttpURLConnection"
date: 2025-10-10
draft: false
tags: ["Java", "HTTP", "REST API"]
categories: ["Java"]
description: "Gửi HTTP requests với Java"
---

## HTTP Protocol

HTTP là giao thức nền tảng của World Wide Web.

## HttpURLConnection

```java
URL url = new URL("https://api.example.com/users");
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("GET");

int responseCode = conn.getResponseCode();
System.out.println("Response Code: " + responseCode);
```

## Kết Luận

HttpURLConnection cho phép Java tương tác với REST APIs.
""",

    "nodejs-lap-trinh-bat-dong-bo.md": """---
title: "Node.js và Lập Trình Mạng Bất Đồng Bộ"
date: 2025-10-09
draft: false
tags: ["JavaScript", "Node.js", "Async"]
categories: ["JavaScript"]
description: "Khám phá Node.js và async programming"
---

## Node.js

Node.js cho phép chạy JavaScript trên server với mô hình non-blocking I/O.

## Event Loop

```javascript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('Đã gọi readFile');
```

## Async/Await

```javascript
async function readData() {
    try {
        const data = await fs.promises.readFile('data.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
```

## Kết Luận

Node.js và async/await giúp xây dựng ứng dụng network hiệu quả.
""",

    "expressjs-restful-api.md": """---
title: "Xây Dựng RESTful API với Express.js"
date: 2025-10-08
draft: false
tags: ["JavaScript", "Express.js", "REST API"]
categories: ["JavaScript"]
description: "Tạo RESTful API với Express.js"
---

## Express.js

Express là web framework phổ biến nhất cho Node.js.

## Basic API

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
    res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    res.status(201).json({ user });
});

app.listen(3000);
```

## Kết Luận

Express.js giúp xây dựng APIs nhanh chóng và dễ dàng.
""",

    "websocket-real-time-communication.md": """---
title: "WebSocket với JavaScript - Real-time Communication"
date: 2025-10-07
draft: false
tags: ["JavaScript", "WebSocket", "Real-time"]
categories: ["JavaScript"]
description: "Xây dựng ứng dụng real-time với WebSocket"
---

## WebSocket

WebSocket cho phép giao tiếp hai chiều real-time giữa client và server.

## Native WebSocket API

```javascript
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
    console.log('Message:', event.data);
});
```

## WebSocket Server

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('Received:', message);
        ws.send('Echo: ' + message);
    });
});
```

## Kết Luận

WebSocket là lựa chọn tốt cho chat, gaming, và live updates.
""",

    "fetch-api-ajax-javascript.md": """---
title: "Fetch API và AJAX trong JavaScript"
date: 2025-10-06
draft: false
tags: ["JavaScript", "Fetch API", "AJAX", "HTTP"]
categories: ["JavaScript"]
description: "Sử dụng Fetch API để giao tiếp với server"
---

## Fetch API

Fetch API là cách hiện đại để thực hiện HTTP requests trong JavaScript.

## GET Request

```javascript
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## POST Request

```javascript
async function createUser(user) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    
    return await response.json();
}
```

## Kết Luận

Fetch API kết hợp async/await tạo code dễ đọc và maintainable.
"""
}

# Write all posts
for filename, content in posts.items():
    filepath = os.path.join('content', 'posts', filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename}")

print("\nAll posts updated successfully!")
