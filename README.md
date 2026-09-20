# Website Giới Thiệu Đại Học Bách Khoa Hà Nội (HUST)
**Hanoi University of Science and Technology** — *"Một tình yêu, một Bách Khoa"*

Website được xây dựng hiện đại, trực quan, tương thích đa thiết bị (Responsive Mobile & Desktop) nhằm giới thiệu toàn diện về lịch sử, mô hình tổ chức các Trường/Viện thành viên, danh mục 75+ chương trình đào tạo, phương thức tuyển sinh và đời sống sinh viên Bách Khoa.

---

## 🌟 Các Tính Năng Nổi Bật

1. **Bộ nhận diện chuẩn HUST**: Gam màu Đỏ Bách Khoa (`#B91C1C`), Xanh Navy và Vàng kim hiện đại.
2. **Thống kê sinh động (Counter Animation)**: Đếm số tự động khi cuộn màn hình (năm 1956, 35.000+ sinh viên, 1.700+ cán bộ giảng viên, 26 ha khuôn viên...).
3. **Cơ cấu đào tạo chuẩn mới**:
   - Trường Công nghệ Thông tin & Truyền thông (SoICT)
   - Trường Điện - Điện tử (SEEE)
   - Trường Cơ khí (SME)
   - Trường Hóa và Khoa học Sự sống (SCLS)
   - Trường Vật liệu (SMSE)
   - Cùng Viện Kinh tế Quản lý (SEM), Khoa Ngoại ngữ (SOFL), Khoa Toán - Tin...
4. **Bộ công cụ tra cứu ngành học (Interactive Major Finder)**:
   - Tìm kiếm nhanh theo từ khóa, mã ngành (IT1, IT2, EE2, ME1, TX1, ET-E16, CH1, MS1, EM1, FL1...).
   - Lọc theo từng Trường/Viện thành viên.
   - Hiển thị điểm sàn tham khảo (kỳ thi Đánh giá tư duy TSA & thi THPT Quốc gia).
   - Modal xem chi tiết chuẩn đầu ra và cơ hội nghề nghiệp.
5. **Mini Quiz: "Bạn hợp với Trường/Ngành nào tại Bách Khoa?"**:
   - Trắc nghiệm 4 câu hỏi định hướng sở thích, tính cách kỹ thuật.
   - Hệ thống tự động tính điểm và gợi ý Trường/Viện cùng các ngành học tiêu biểu phù hợp nhất.
6. **Phương thức tuyển sinh 2025 - 2026**:
   - Chi tiết Kỳ thi Đánh giá tư duy (TSA - đặc sản Bách Khoa).
   - Phương thức Xét tuyển tài năng (XTTN).
   - Phương thức Điểm thi Tốt nghiệp THPT.
7. **Lịch sử & Dấu ấn thời gian**: Timeline dọc trực quan từ năm 1956 đến nay.
8. **Khám phá khuôn viên & Đời sống**: Thư viện Tạ Quang Bửu (10 tầng), Tòa nhà C1, Cổng Parabol, KTX, SVĐ Bách Khoa, CLB Robocon...
9. **Form tư vấn trực tuyến**: Giao diện đăng ký tư vấn tuyển sinh với phản hồi toast tức thì.

---

## 🚀 Hướng Dẫn Khởi Chạy

### Cách 1: Chạy bằng file `start.bat` (Nhanh nhất trên Windows)
- Mở thư mục dự án và nhấp đúp vào file `start.bat`.
- Trình duyệt web sẽ tự động mở trang web tại địa chỉ `http://localhost:8000`.

### Cách 2: Chạy bằng dòng lệnh Python
Mở PowerShell hoặc Command Prompt tại thư mục dự án:
```powershell
python run_server.py
```

### Cách 3: Mở trực tiếp bằng trình duyệt
- Nhấp đúp trực tiếp vào file `index.html` trong Windows File Explorer (Google Chrome, Microsoft Edge, Firefox, Cốc Cốc...).

---

## 📁 Cấu Trúc Thư Mục

```
hust-intro-web/
├── index.html          # Trang chủ chính với đầy đủ các section
├── css/
│   └── style.css       # CSS tùy biến nhận diện HUST, hiệu ứng & animations
├── js/
│   ├── data.js         # Toàn bộ dữ liệu trường viện, ngành học, lịch sử, trắc nghiệm
│   └── main.js         # Logic tương tác, bộ lọc tìm kiếm, trắc nghiệm, modals
├── run_server.py       # Script Python tạo máy chủ nội bộ & tự mở trình duyệt
├── start.bat           # Phím tắt nhấp đúp chạy ngay trên Windows
└── README.md           # Hướng dẫn sử dụng chi tiết
```
