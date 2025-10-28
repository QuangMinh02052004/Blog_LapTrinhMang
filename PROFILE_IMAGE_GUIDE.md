# Hướng dẫn thêm hình ảnh Profile cho trang About

## ✅ Đã hoàn thành:
- Thêm CSS styling cho profile image (hình tròn, viền, hiệu ứng hover)
- Cập nhật HTML trong about.md để hiển thị hình ảnh
- Thiết kế responsive và dark mode support

## 📸 Bước tiếp theo - Thêm hình ảnh:

### 1. Lưu hình ảnh piano
Lưu hình ảnh piano của bạn vào thư mục:
```
/Users/lequangminh/Documents/Blog_LapTrinhMang-1/assets/images/piano-profile.jpg
```

### 2. Tối ưu hình ảnh (khuyến nghị):
- **Kích thước:** 300x300px hoặc 500x500px
- **Format:** JPG (cho ảnh thật) hoặc PNG (nếu cần nền trong suốt)
- **Chất lượng:** Tốt nhưng file size dưới 500KB

### 3. Kiểm tra kết quả:
Sau khi lưu hình ảnh, mở http://localhost:1313/about/ để xem

## 🎨 Hiệu ứng đã thêm:
- ✅ Hình tròn (border-radius: 50%)
- ✅ Viền màu primary/accent
- ✅ Shadow đẹp mắt
- ✅ Hover effect (scale + shadow)
- ✅ Dark mode support
- ✅ Responsive design

## 🔧 Tùy chỉnh thêm (nếu cần):

### Thay đổi kích thước:
```css
.cv-profile-image {
    width: 200px;  /* Thay đổi từ 150px */
    height: 200px; /* Thay đổi từ 150px */
}
```

### Thay đổi màu viền:
```css
.cv-profile-image {
    border-color: #your-color;
}
```

### Vị trí khác (không center):
```css
.cv-header {
    text-align: left; /* hoặc right */
}
```

## 🚀 Deploy:
Sau khi thêm hình và kiểm tra local, chạy:
```bash
git add .
git commit -m "Add profile image to about page"
git push origin main
```

Trang About sẽ tự động cập nhật trên GitHub Pages!