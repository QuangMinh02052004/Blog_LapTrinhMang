---
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
