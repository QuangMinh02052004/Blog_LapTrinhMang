# 📝 Hướng Dẫn Chỉnh Sửa Trang CV (About Page)

## 🎯 File Cần Sửa

### 📄 Nội Dung CV
**File:** `content/about.md`

Đây là file chính chứa toàn bộ nội dung CV của bạn.

---

## ✏️ Các Phần Cần Chỉnh Sửa

### 1. **Thông Tin Cá Nhân** (Dòng 12-44)

```markdown
<h1 class="cv-name">Lê Quang Minh</h1>
<p class="cv-title">Software Engineer | Network Programming Specialist</p>
```

**Sửa thành thông tin của bạn:**
- Tên: Thay "Lê Quang Minh"
- Chức danh: Thay "Software Engineer | Network Programming Specialist"

**Liên hệ:**
```markdown
<a href="mailto:your.email@example.com" ...>your.email@example.com</a>
<a href="https://github.com/yourusername" ...>GitHub</a>
<a href="tel:+84123456789" ...>+84 123 456 789</a>
<span>Hà Nội, Việt Nam</span>
```

Thay đổi:
- Email: `your.email@example.com` → email thật của bạn
- GitHub: `yourusername` → username GitHub của bạn
- Số điện thoại: `+84 123 456 789` → số điện thoại của bạn
- Địa chỉ: `Hà Nội, Việt Nam` → địa chỉ của bạn

---

### 2. **Tóm Tắt Chuyên Môn** (Dòng 57-59)

```markdown
<p class="cv-summary">
  Sinh viên năm cuối ngành Công Nghệ Thông Tin với niềm đam mê...
</p>
```

**Viết lại đoạn mô tả về bản thân:**
- Mô tả ngắn gọn về bạn
- Kinh nghiệm và kỹ năng chính
- Mục tiêu nghề nghiệp

---

### 3. **Học Vấn** (Dòng 72-89)

```markdown
<h3 class="cv-item-title">Cử Nhân Công Nghệ Thông Tin</h3>
<p class="cv-item-company">Đại học [Tên Trường]</p>
<span class="cv-item-date">09/2021 - 06/2025</span>
```

**Cập nhật:**
- Tên trường: Thay `[Tên Trường]`
- Thời gian: Thay `09/2021 - 06/2025`
- GPA: Thay `3.5/4.0`
- Đề tài khóa luận: Sửa nội dung
- Môn học: Thêm/bớt môn học
- Hoạt động: Thêm hoạt động của bạn

---

### 4. **Kỹ Năng Kỹ Thuật** (Dòng 102-176)

**Ngôn Ngữ Lập Trình:**
```markdown
<span class="cv-skill-tag">Java</span>
<span class="cv-skill-tag">JavaScript</span>
<span class="cv-skill-tag">Python</span>
```

**Thêm/bớt/sửa skill:**
- Thêm skill: Copy dòng `<span class="cv-skill-tag">Tên Skill</span>`
- Xóa skill: Xóa dòng không cần
- Sửa tên: Thay tên trong tag

**Áp dụng tương tự cho:**
- Lập Trình Mạng
- Web Development
- Database & Tools

---

### 5. **Dự Án** (Dòng 187-261)

Mỗi dự án có cấu trúc:

```markdown
<div class="cv-project">
  <div class="cv-project-header">
    <h3 class="cv-project-title">Tên Dự Án</h3>
    <div class="cv-project-links">
      <a href="https://github.com/..." ...>GitHub</a>
      <a href="https://demo..." ...>Demo</a>
    </div>
  </div>
  <p class="cv-item-description">
    Mô tả ngắn gọn về dự án...
  </p>
  <ul class="cv-item-list">
    <li>Điểm nổi bật 1</li>
    <li>Điểm nổi bật 2</li>
  </ul>
  <div class="cv-project-tech">
    <span class="cv-project-tech-tag">Tech 1</span>
    <span class="cv-project-tech-tag">Tech 2</span>
  </div>
</div>
```

**Để thêm dự án mới:**
1. Copy toàn bộ block `<div class="cv-project">...</div>`
2. Paste vào cuối danh sách dự án
3. Sửa nội dung:
   - Tên dự án
   - Links (GitHub, Demo)
   - Mô tả
   - Các điểm nổi bật
   - Technologies sử dụng

**Để xóa dự án:**
- Xóa toàn bộ block `<div class="cv-project">...</div>`

---

### 6. **Chứng Chỉ & Thành Tích** (Dòng 277-300)

```markdown
<div class="cv-cert-item">
  <div class="cv-cert-icon">✓</div>
  <div class="cv-cert-content">
    <h4>Tên Chứng Chỉ</h4>
    <p>Tổ Chức | Năm</p>
  </div>
</div>
```

**Sửa:**
- Icon: `✓` (checkmark) hoặc `🏆` (trophy)
- Tên chứng chỉ
- Tổ chức cấp
- Năm nhận

**Thêm chứng chỉ mới:** Copy block và paste

---

### 7. **Ngôn Ngữ** (Dòng 314-324)

```markdown
<div class="cv-skill-category">
  <h4>Tiếng Việt</h4>
  <p>Bản ngữ</p>
</div>

<div class="cv-skill-category">
  <h4>Tiếng Anh</h4>
  <p>TOEIC 750+ | Đọc hiểu tài liệu kỹ thuật tốt</p>
</div>
```

**Sửa:** Cập nhật trình độ ngôn ngữ của bạn

---

### 8. **Sở Thích** (Dòng 336-342)

```markdown
<span class="cv-skill-tag">Open Source Contribution</span>
<span class="cv-skill-tag">Technical Blogging</span>
<span class="cv-skill-tag">Coding Challenges</span>
```

**Thêm/bớt/sửa sở thích theo ý bạn**

---

## 🎨 Tùy Chỉnh Giao Diện

### File CSS
**File:** `assets/css/extended/cv-style.css`

**Màu sắc chính:**
```css
/* Màu primary */
#d2691e (chocolate)
#ffa07a (light salmon - dark mode)

/* Để đổi màu, tìm và thay thế toàn bộ: */
/* Find: #d2691e, Replace: #your-color */
```

**Font size:**
```css
.cv-name {
    font-size: 2.5rem;  /* Tên */
}

.cv-title {
    font-size: 1.3rem;  /* Chức danh */
}

.cv-section-title {
    font-size: 1.8rem;  /* Tiêu đề section */
}
```

---

## 📸 Xem Preview

### Local:
```bash
hugo server --buildDrafts
# Mở: http://localhost:1313/Blog_LapTrinhMang/about/
```

### Production:
```
https://quangminh02052004.github.io/Blog_LapTrinhMang/about/
```

---

## 💾 Deploy Sau Khi Sửa

### Cách nhanh:
```bash
./deploy.sh "Update CV - Add new projects"
```

### Cách thủ công:
```bash
git add content/about.md
git commit -m "Update CV information"
git push origin main
```

---

## 📋 Checklist Khi Sửa CV

- [ ] Thay thông tin cá nhân (tên, email, SĐT, địa chỉ)
- [ ] Cập nhật tóm tắt chuyên môn
- [ ] Sửa thông tin học vấn (trường, thời gian, GPA)
- [ ] Cập nhật danh sách kỹ năng
- [ ] Thêm/sửa dự án thực tế
- [ ] Cập nhật chứng chỉ và thành tích
- [ ] Kiểm tra links (GitHub, Demo, etc.)
- [ ] Sửa trình độ ngôn ngữ
- [ ] Preview local trước khi deploy
- [ ] Deploy lên GitHub Pages

---

## 💡 Tips

### 1. Thêm ảnh đại diện
Thêm sau dòng 12:
```html
<img src="/path/to/your/photo.jpg" alt="Profile" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 1rem;">
```

### 2. Thêm LinkedIn
Trong phần contact (sau GitHub):
```html
<a href="https://linkedin.com/in/yourprofile" class="cv-contact-item" target="_blank">
  <svg>...</svg>
  LinkedIn
</a>
```

### 3. Tạo PDF từ CV
Click vào nút "Tải CV (Print to PDF)" hoặc:
- Mở trang CV
- Nhấn `Ctrl + P` (Windows) / `Cmd + P` (Mac)
- Chọn "Save as PDF"

### 4. Backup trước khi sửa
```bash
cp content/about.md content/about.md.backup
```

File backup gốc đã được lưu tại: `content/about.md.backup`

---

## 🆘 Troubleshooting

### CSS không hiển thị?
```bash
hugo --gc --minify
```

### Changes không thấy trên local?
- Dừng server: `Ctrl + C`
- Chạy lại: `hugo server --buildDrafts`
- Xóa cache: `Ctrl + Shift + R`

### Deploy lên GitHub nhưng không thấy thay đổi?
1. Kiểm tra GitHub Actions đã chạy xong chưa
2. Xóa cache trình duyệt: `Ctrl + Shift + R`
3. Mở trang ẩn danh

---

## 📞 Cần Giúp Đỡ?

Nếu gặp khó khăn, hãy kiểm tra:
1. File `content/about.md` có đúng cú pháp HTML không
2. Hugo server có báo lỗi không
3. Build production có thành công không: `hugo --gc --minify`

---

**Chúc bạn tạo được CV ấn tượng! 🎉**
