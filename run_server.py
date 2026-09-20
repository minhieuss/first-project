"""
Script khởi chạy máy chủ cục bộ xem Website Giới thiệu Đại học Bách Khoa Hà Nội (HUST).
Sử dụng chuẩn thư viện Python có sẵn (không cần cài đặt thêm thư viện ngoài).
"""
import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 8000

def find_available_port(start_port=8000, max_attempts=20):
    import socket
    for port in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('localhost', port)) != 0:
                return port
    return start_port

def main():
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)

    port = find_available_port(DEFAULT_PORT)
    url = f"http://localhost:{port}/index.html"

    handler = http.server.SimpleHTTPRequestHandler

    print("=" * 65)
    print("  ĐẠI HỌC BÁCH KHOA HÀ NỘI - HANOI UNIVERSITY OF SCIENCE & TECH")
    print("  Website giới thiệu đang chạy tại:")
    print(f"  --> {url}")
    print("  Nhấn Ctrl + C để dừng máy chủ bất cứ lúc nào.")
    print("=" * 65)

    # Tự động mở trình duyệt web
    webbrowser.open(url)

    with socketserver.TCPServer(("", port), handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nĐã dừng máy chủ cục bộ. Cảm ơn bạn!")
            sys.exit(0)

if __name__ == "__main__":
    main()
