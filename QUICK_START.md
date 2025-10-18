# 🚀 Quick Start Guide - Blog Lập Trình Mạng

## 📋 Tóm Tắt

Blog này đã được custom với **minimal & elegant design** + **interactive features** để có trải nghiệm đọc tốt nhất.

---

## ⚡ Chạy Development Server

```bash
# Start server (với drafts)
hugo server -D

# Start server (production mode)
hugo server --environment production

# Build for deployment
hugo --minify
```

**URL**: http://localhost:1313

---

## 🎨 Tính Năng Đã Có

### 1️⃣ **Visual Design**
- ✅ Minimal black & white color palette
- ✅ Elegant typography (Playfair Display + Inter)
- ✅ Magazine-style grid layout
- ✅ Dark mode support
- ✅ Responsive (mobile, tablet, desktop)

### 2️⃣ **Interactive Features** (MỚI!)
- ✅ Reading progress bar (thanh tiến trình đọc)
- ✅ Back to top button (nút lên đầu trang)
- ✅ Image zoom/lightbox (phóng to ảnh)
- ✅ Code copy button (copy code dễ dàng)
- ✅ Lazy load images (tối ưu tốc độ)
- ✅ Smooth scrolling (cuộn mượt)
- ✅ Keyboard shortcuts (phím tắt)

---

## 📂 Cấu Trúc Quan Trọng

```
Blog_LapTrinhMang-1/
├── content/               # Bài viết (Markdown)
├── assets/
│   ├── css/
│   │   └── extended/
│   │       └── custom.css     # Custom CSS ⭐
│   └── js/
│       └── enhancements.js    # Interactive JS ⭐
├── layouts/
│   └── partials/
│       ├── extend_head.html   # Custom head
│       └── extend_footer.html # Custom footer
├── hugo.toml              # Config chính
└── themes/
    └── PaperMod/          # Base theme (submodule)
```

---

## ✍️ Tạo Bài Viết Mới

```bash
# Tạo bài viết mới
hugo new posts/ten-bai-viet.md

# Hoặc với template có sẵn
hugo new posts/java/socket-programming.md
```

### Front Matter Mẫu:

```yaml
---
title: "Tiêu Đề Bài Viết"
date: 2025-10-18T10:00:00+07:00
draft: false
author: "Lê Quang Minh"
categories: ["Java", "Networking"]
tags: ["Socket", "TCP/IP", "Tutorial"]
description: "Mô tả ngắn gọn về bài viết"
cover:
    image: "/images/featured.jpg"
    alt: "Alternative text"
    caption: "Image caption"
---

Nội dung bài viết ở đây...
```

---

## 🎯 Keyboard Shortcuts

| Phím | Chức năng |
|------|-----------|
| `T` hoặc `Home` | Scroll lên đầu trang |
| `B` hoặc `End` | Scroll xuống cuối trang |
| `ESC` | Đóng image modal |

---

## 🎨 Customization Tips

### Đổi Màu Chủ Đạo

Edit [assets/css/extended/custom.css](assets/css/extended/custom.css:9-57):

```css
:root {
    --primary: #000000;      /* Màu chữ chính */
    --secondary: #737373;    /* Màu chữ phụ */
    --border: #e5e5e5;       /* Màu viền */
    --theme: #ffffff;        /* Màu nền */
}
```

### Đổi Font Chữ

Edit [layouts/partials/extend_head.html](layouts/partials/extend_head.html:1-4):

```html
<!-- Thay Google Fonts URL -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Và update CSS:

```css
:root {
    --font-heading: 'Your Font', serif;
    --font-body: 'Your Font', sans-serif;
}
```

### Tắt Một Tính Năng

Edit [assets/js/enhancements.js](assets/js/enhancements.js):

```javascript
function runInit() {
    // initReadingProgress();  // Comment để tắt
    initBackToTop();
    // ...
}
```

---

## 🚀 Deploy

### GitHub Pages

```bash
# Build
hugo --minify

# Commit & push
git add .
git commit -m "Update blog"
git push origin main
```

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `hugo --minify`
4. Publish directory: `public`

### Vercel

1. Push to GitHub
2. Import project to Vercel
3. Framework: Hugo
4. Auto-deploy on push

---

## 🔧 Troubleshooting

### CSS không hiển thị?
```bash
# Clear cache và rebuild
rm -rf public resources
hugo --minify
```

### JavaScript không chạy?
- Mở DevTools (F12) → Console
- Check errors
- Verify file path: `/assets/js/enhancements.js`

### Theme không load?
```bash
# Update submodule
git submodule update --init --recursive
```

### Build failed?
```bash
# Check Hugo version
hugo version
# Cần: v0.112.0+

# Update Hugo (macOS)
brew upgrade hugo
```

---

## 📚 Tài Liệu Chi Tiết

- [CUSTOM_THEME.md](CUSTOM_THEME.md) - Chi tiết về design theme
- [ENHANCEMENTS.md](ENHANCEMENTS.md) - Chi tiết về interactive features
- [Hugo Docs](https://gohugo.io/documentation/)
- [PaperMod Wiki](https://github.com/adityatelange/hugo-PaperMod/wiki)

---

## 💡 Pro Tips

1. **Viết Markdown tốt**: Dùng headings đúng (H1 → H6)
2. **Optimize ảnh**: Nén ảnh trước khi upload
3. **SEO**: Điền đầy đủ front matter (title, description, tags)
4. **Performance**: Dùng `hugo --minify` khi deploy
5. **Dark mode**: Test cả light & dark mode

---

## 📝 Checklist Trước Khi Deploy

- [ ] Test trên localhost (`hugo server`)
- [ ] Check responsive (mobile, tablet, desktop)
- [ ] Kiểm tra links không bị broken
- [ ] Optimize images
- [ ] Điền meta description
- [ ] Test dark mode
- [ ] Build với `hugo --minify`
- [ ] Verify syntax highlighting
- [ ] Test interactive features (progress bar, image zoom, etc.)

---

## 🎉 Kết Quả

Sau khi setup xong, bạn sẽ có:

✅ Blog minimal, elegant, professional
✅ 10+ interactive features
✅ Mobile-responsive
✅ Dark mode
✅ Fast loading (<2s)
✅ SEO-friendly
✅ Easy to maintain

---

## 🆘 Cần Trợ Giúp?

1. Check documentation files
2. Google search với keyword "Hugo PaperMod"
3. GitHub Issues: [Hugo](https://github.com/gohugoio/hugo/issues) | [PaperMod](https://github.com/adityatelange/hugo-PaperMod/issues)

---

**Happy Blogging! 📝✨**

Made with ❤️ by Lê Quang Minh
