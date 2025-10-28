# Blog Lập Trình Mạng - Java & JavaScript

Blog cá nhân chia sẻ kiến thức về Lập Trình Mạng với Java và JavaScript.

## Giới Thiệu

Đây là blog cá nhân được xây dựng bằng **Hugo** với theme **PaperMod**, tập trung vào các chủ đề:

- **Java Network Programming**: Socket, TCP/UDP, RMI, HTTP Client
- **JavaScript & Node.js**: Async Programming, Express.js, WebSocket, Fetch API

## Nội Dung Blog

Blog bao gồm các bài viết về:

### Java
1. Giới Thiệu Socket Programming trong Java
2. Xây Dựng TCP Client-Server với Java
3. UDP Socket Programming trong Java
4. Multithreading trong Java Network Programming
5. Java RMI - Remote Method Invocation
6. HTTP Client trong Java với HttpURLConnection

### JavaScript
7. Node.js và Lập Trình Mạng Bất Đồng Bộ
8. Xây Dựng RESTful API với Express.js
9. WebSocket với JavaScript - Real-time Communication
10. Fetch API và AJAX trong JavaScript

## Cấu Trúc Project

```
Blog_LapTrinhMang/
├── archetypes/         # Templates cho content mới
├── assets/             # CSS, JS, images
├── content/
│   ├── about.md       # Trang giới thiệu
│   └── posts/         # Các bài viết
├── themes/
│   └── PaperMod/      # Theme
├── hugo.toml          # File cấu hình Hugo
└── README.md
```

## Yêu Cầu Hệ Thống

- [Hugo Extended](https://gohugo.io/installation/) v0.115.0 trở lên
- Git

## Cài Đặt và Chạy Local

### 1. Clone repository

```bash
git clone https://github.com/yourusername/Blog_LapTrinhMang.git
cd Blog_LapTrinhMang
```

### 2. Clone theme (nếu chưa có)

```bash
git submodule update --init --recursive
```

Hoặc:

```bash
cd themes
git clone https://github.com/adityatelange/hugo-PaperMod.git PaperMod
```

### 3. Chạy development server

```bash
hugo server -D
```

Blog sẽ chạy tại: http://localhost:1313

## Build cho Production

```bash
hugo
```

Các file static sẽ được tạo trong thư mục `public/`.

## Deploy

### GitHub Pages

1. Build blog:
   ```bash
   hugo
   ```

2. Deploy thư mục `public/` lên GitHub Pages

### Netlify

1. Connect repository với Netlify
2. Build command: `hugo --gc --minify`
3. Publish directory: `public`

## Tùy Chỉnh

### Thay đổi thông tin cá nhân

Edit file `hugo.toml`:

```toml
[params]
  author = "Tên của bạn"
  description = "Mô tả blog"
  
  [params.homeInfoParams]
    Title = "Tiêu đề trang chủ"
    Content = "Nội dung giới thiệu"
```

### Thay đổi social links

```toml
[[params.socialIcons]]
  name = "github"
  url = "https://github.com/QuangMinh02052004"
  
[[params.socialIcons]]
  name = "email"
  url = "lequangminh951@gmail.com"
```

## Tạo Bài Viết Mới

```bash
hugo new posts/ten-bai-viet.md
```

Template bài viết:

```markdown
---
title: "Tiêu Đề Bài Viết"
date: 2025-10-17
draft: false
tags: ["Java", "Network"]
categories: ["Java"]
description: "Mô tả ngắn"
---

## Nội dung bài viết...
```

## Theme

Blog sử dụng [PaperMod](https://github.com/adityatelange/hugo-PaperMod) - một theme Hugo đẹp, tối giản và responsive.

## Tính Năng

- ✅ Responsive design
- ✅ Dark/Light mode
- ✅ Syntax highlighting cho code
- ✅ Copy code button
- ✅ Table of Contents
- ✅ Reading time
- ✅ Tags & Categories
- ✅ Search (JSON index)
- ✅ Social sharing buttons


## Liên Hệ

- Email: lequangminh951@gmail.com
- GitHub: [github.com/QuangMinh02052004](https://github.com)

## Tham Khảo

- [Hugo Documentation](https://gohugo.io/documentation/)
- [PaperMod Documentation](https://github.com/adityatelange/hugo-PaperMod/wiki)
