---
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
