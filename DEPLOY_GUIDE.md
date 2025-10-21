# 🚀 Hướng Dẫn Deploy Blog Lên GitHub Pages

## Phương Pháp 1: Sử Dụng Script Tự Động (Khuyên Dùng)

### Cách 1: Deploy với message tùy chỉnh
```bash
./deploy.sh "Thêm bài viết mới về Socket Programming"
```

### Cách 2: Deploy với message mặc định
```bash
./deploy.sh
```

---

## Phương Pháp 2: Thực Hiện Thủ Công

### Bước 1: Kiểm tra thay đổi
```bash
git status
```

### Bước 2: Thêm file vào staging
```bash
# Thêm tất cả file
git add .

# HOẶC thêm file cụ thể
git add layouts/index.html
git add assets/css/extended/hero-landing.css
git add content/posts/bai-viet-moi.md
```

### Bước 3: Commit thay đổi
```bash
git commit -m "Mô tả ngắn gọn về thay đổi"
```

**Ví dụ commit messages:**
- `"Add new post about WebSocket programming"`
- `"Update landing page design"`
- `"Fix typo in Java Socket tutorial"`
- `"Add new category for JavaScript"`

### Bước 4: Push lên GitHub
```bash
git push origin main
```

---

## 📊 Theo Dõi Quá Trình Deploy

### Cách 1: Trên GitHub Web
Mở link sau và xem workflow mới nhất:
```
https://github.com/QuangMinh02052004/Blog_LapTrinhMang/actions
```

**Trạng thái:**
- ⏳ **Vòng tròn vàng**: Đang build (chờ 2-3 phút)
- ✅ **Dấu tick xanh**: Build thành công
- ❌ **Dấu X đỏ**: Build thất bại (click vào để xem lỗi)

### Cách 2: Dùng GitHub CLI (nếu đã cài)
```bash
# Xem danh sách workflow runs
gh run list --limit 5

# Theo dõi workflow đang chạy
gh run watch
```

---

## 🌐 Xem Trang Web

### URL trang web của bạn:
```
https://quangminh02052004.github.io/Blog_LapTrinhMang/
```

### ⚠️ Nếu không thấy thay đổi:

**1. Đợi GitHub Actions hoàn thành** (2-3 phút)

**2. Xóa cache trình duyệt:**
- **Windows**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`

**3. Mở trang trong chế độ ẩn danh:**
- **Chrome/Edge**: `Ctrl + Shift + N` (Win) / `Cmd + Shift + N` (Mac)
- **Firefox**: `Ctrl + Shift + P` (Win) / `Cmd + Shift + P` (Mac)
- **Safari**: `Cmd + Shift + N`

---

## 🧪 Test Local Trước Khi Deploy

### Chạy Hugo server local:
```bash
hugo server --buildDrafts
```

### Mở trình duyệt:
```
http://localhost:1313/Blog_LapTrinhMang/
```

### Build production để kiểm tra:
```bash
hugo --gc --minify
```

### Dừng server:
```
Ctrl + C
```

---

## 📝 Quy Trình Làm Việc Hàng Ngày

```bash
# 1. Tạo bài viết mới
hugo new posts/ten-bai-viet.md

# 2. Viết nội dung bài viết
# (sử dụng editor yêu thích)

# 3. Test local
hugo server --buildDrafts

# 4. Xem trước tại http://localhost:1313/Blog_LapTrinhMang/

# 5. Deploy lên GitHub Pages
./deploy.sh "Add new post: Tên bài viết"

# 6. Đợi 2-3 phút và kiểm tra trang web
```

---

## 🔧 Các Lệnh Hữu Ích

### Xem lịch sử commit
```bash
git log --oneline -10
```

### Hoàn tác thay đổi chưa commit
```bash
git restore .
```

### Hoàn tác file cụ thể
```bash
git restore layouts/index.html
```

### Xem diff trước khi commit
```bash
git diff
```

### Kiểm tra remote repository
```bash
git remote -v
```

### Xem branch hiện tại
```bash
git branch
```

---

## ❌ Xử Lý Lỗi

### Lỗi: "Your branch is behind 'origin/main'"
```bash
git pull origin main
```

### Lỗi: "There is no tracking information for the current branch"
```bash
git push -u origin main
```

### Lỗi: Conflict khi pull
```bash
# Xem file conflict
git status

# Sửa file conflict, sau đó:
git add .
git commit -m "Resolve merge conflict"
git push origin main
```

### Build thất bại trên GitHub Actions
1. Mở GitHub Actions và xem log lỗi
2. Kiểm tra lại cú pháp Hugo templates
3. Đảm bảo tất cả file CSS/JS tồn tại
4. Test local trước: `hugo --gc --minify`

---

## 💡 Tips

### 1. Luôn test local trước khi deploy
```bash
hugo server --buildDrafts
```

### 2. Viết commit message rõ ràng
✅ Good: `"Add tutorial about TCP Socket in Java"`
❌ Bad: `"update"`

### 3. Commit thường xuyên
Tốt hơn là commit nhiều lần với message rõ ràng thay vì một commit lớn.

### 4. Sử dụng .gitignore
File `.gitignore` đã được cấu hình để không commit các file không cần thiết.

### 5. Kiểm tra git status trước khi commit
```bash
git status
```

---

## 📚 Tài Liệu Tham Khảo

- [Hugo Documentation](https://gohugo.io/documentation/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 🆘 Cần Trợ Giúp?

Nếu gặp vấn đề, hãy kiểm tra:
1. GitHub Actions logs: https://github.com/QuangMinh02052004/Blog_LapTrinhMang/actions
2. Build local có thành công không: `hugo --gc --minify`
3. File cấu hình `hugo.toml` có đúng không

---

**Chúc bạn viết blog vui vẻ! 🎉**
