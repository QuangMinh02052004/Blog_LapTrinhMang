---
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
