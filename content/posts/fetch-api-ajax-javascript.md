---
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
