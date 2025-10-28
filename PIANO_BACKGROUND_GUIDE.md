# Hướng dẫn thêm hình nền Piano

## Bước 1: Lưu hình ảnh
1. Lưu hình ảnh piano (hình đầu tiên bạn gửi) vào thư mục:
   ```
   /Users/lequangminh/Documents/Blog_LapTrinhMang-1/assets/images/
   ```
2. Đặt tên file là: `piano-background.jpg` hoặc `piano-background.png`

## Bước 2: Kiểm tra kết quả
Sau khi lưu hình ảnh, hãy:
1. Chạy Hugo server để xem kết quả:
   ```bash
   hugo server -D
   ```
2. Mở trình duyệt và xem trang chủ

## Thay đổi đã thực hiện
✅ Cập nhật CSS để sử dụng hình nền
✅ Thêm overlay tối để text dễ đọc
✅ Tăng độ tương phản cho text
✅ Giữ lại hiệu ứng gradient và mesh pattern

## Tùy chỉnh thêm (nếu cần)
Nếu bạn muốn điều chỉnh:
- Độ mờ của overlay: thay đổi `rgba(0, 0, 0, 0.4)` trong `.first-entry::before`
- Vị trí hình nền: thay đổi `background-position: center`
- Kích thước hình nền: thay đổi `background-size: cover`

## Lưu ý
- Hình ảnh nên có độ phân giải cao (ít nhất 1920x1080) để đảm bảo chất lượng
- Format tốt nhất: JPG cho ảnh thật, PNG cho ảnh có transparency
- Kích thước file nên dưới 2MB để trang web load nhanh