---
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
