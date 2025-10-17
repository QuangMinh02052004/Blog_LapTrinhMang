#!/bin/bash

# Post 1: Socket Programming
cat > content/posts/gioi-thieu-socket-programming-java.md << 'EOF'
---
title: "Giới Thiệu Socket Programming trong Java"
date: 2025-10-15
draft: false
tags: ["Java", "Socket", "Network Programming", "TCP/IP"]
categories: ["Java"]
author: "Lê Quang Minh"
description: "Tìm hiểu về Socket Programming trong Java - nền tảng cơ bản của lập trình mạng"
---

## Socket Programming là gì?

Socket Programming là một kỹ thuật lập trình mạng cho phép hai máy tính có thể giao tiếp với nhau qua mạng. Socket được coi như một "điểm kết nối" (endpoint) trong một kết nối mạng hai chiều giữa hai chương trình chạy trên mạng.

## Các Khái Niệm Cơ Bản

### 1. Socket
Socket là một interface lập trình ứng dụng (API) cho phép các chương trình giao tiếp với nhau thông qua mạng. Mỗi socket được xác định bởi:
- **Địa chỉ IP**: Xác định máy tính trong mạng
- **Port number**: Xác định ứng dụng cụ thể trên máy tính đó

### 2. Client-Server Model
Trong mô hình Client-Server:
- **Server**: Chương trình lắng nghe và chấp nhận kết nối từ client
- **Client**: Chương trình khởi tạo kết nối đến server

## Socket trong Java

Java cung cấp hai class chính để làm việc với Socket:

### 1. Socket Class
- Dùng cho client để kết nối đến server
- Package: java.net.Socket

### 2. ServerSocket Class
- Dùng cho server để lắng nghe kết nối từ client
- Package: java.net.ServerSocket

## Kết Luận

Socket Programming là nền tảng quan trọng trong lập trình mạng. Hiểu rõ cách socket hoạt động sẽ giúp bạn xây dựng các ứng dụng mạng hiệu quả.
EOF

echo "Created gioi-thieu-socket-programming-java.md"
