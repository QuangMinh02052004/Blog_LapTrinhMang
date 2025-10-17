---
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
