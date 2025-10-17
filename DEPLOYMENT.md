# Hướng Dẫn Deploy Blog

## Tùy Chọn 1: GitHub Pages

### Bước 1: Tạo GitHub Repository

```bash
# Tại local, thêm remote
git remote add origin https://github.com/yourusername/Blog_LapTrinhMang.git
git branch -M main
git push -u origin main
```

### Bước 2: Thiết lập GitHub Actions

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
          
      - name: Build
        run: hugo --minify
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Bước 3: Cấu hình Repository

1. Vào Settings > Pages
2. Source: chọn "GitHub Actions"
3. Đợi workflow chạy

Blog sẽ có tại: `https://yourusername.github.io/Blog_LapTrinhMang/`

### Bước 4: Cập nhật baseURL

Edit `hugo.toml`:

```toml
baseURL = 'https://yourusername.github.io/Blog_LapTrinhMang/'
```

## Tùy Chọn 2: Netlify

### Bước 1: Push code lên GitHub

```bash
git remote add origin https://github.com/yourusername/Blog_LapTrinhMang.git
git push -u origin main
```

### Bước 2: Deploy trên Netlify

1. Đăng nhập [Netlify](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Chọn GitHub repository
4. Cấu hình:
   - Build command: `hugo --gc --minify`
   - Publish directory: `public`
   - Hugo version: chọn phiên bản mới nhất

### Bước 3: Tạo file netlify.toml

```toml
[build]
  publish = "public"
  command = "hugo --gc --minify"

[build.environment]
  HUGO_VERSION = "0.151.0"
  HUGO_ENABLEGITINFO = "true"

[context.production.environment]
  HUGO_ENV = "production"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

## Tùy Chọn 3: Vercel

1. Import project từ GitHub
2. Framework Preset: Hugo
3. Build Command: `hugo --gc --minify`
4. Output Directory: `public`
5. Deploy!

## Tùy Chọn 4: Custom Server

### Build static files

```bash
hugo --minify
```

### Upload thư mục public/

Upload toàn bộ thư mục `public/` lên web server của bạn qua FTP/SFTP.

## Cập Nhật Blog

Sau khi deploy, mỗi khi có thay đổi:

```bash
# Tạo/edit bài viết
hugo new posts/ten-bai-moi.md

# Commit và push
git add .
git commit -m "Thêm bài viết mới"
git push

# GitHub Pages/Netlify/Vercel sẽ tự động rebuild
```

## Custom Domain

### GitHub Pages

1. Thêm file `static/CNAME` với nội dung domain của bạn
2. Cấu hình DNS:
   - A record: 185.199.108.153
   - A record: 185.199.109.153
   - A record: 185.199.110.153
   - A record: 185.199.111.153

### Netlify

1. Vào Site settings > Domain management
2. Add custom domain
3. Follow DNS instructions

## Tips

- Kiểm tra blog local trước khi push: `hugo server -D`
- Build production local: `hugo --minify`
- Clear cache nếu có vấn đề: `hugo --gc`
- Check theme updates: `git submodule update --remote`

## Troubleshooting

### Theme không hiển thị

```bash
git submodule update --init --recursive
```

### Build fail

- Check Hugo version
- Verify hugo.toml syntax
- Check submodule đã được clone chưa

### Custom domain không hoạt động

- Đợi DNS propagation (có thể mất 24-48h)
- Verify DNS records
- Enable HTTPS trong settings
