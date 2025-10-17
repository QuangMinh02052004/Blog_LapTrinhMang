---
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
