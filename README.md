docker-compose down
```

Chỉ khởi động dependencies (ví dụ MongoDB và RabbitMQ) khi phát triển:
```bash
# Chỉ bật mongo và rabbitmq
docker-compose up -d mongo rabbitmq
```

## Chạy từng service cục bộ (phát triển / debug)
Mỗi service có thể chạy độc lập:

Ví dụ chạy service product:
```bash
cd product
npm install
# hoặc yarn
npm start
# hoặc script phát triển, ví dụ npm run dev (nếu có)
```

Tương tự cho `auth`, `order`, `api-gateway`. Đảm bảo các biến môi trường trỏ tới MongoDB / RabbitMQ đang chạy (cục bộ hoặc container).

## Chạy test
- Mỗi service có thể có script test riêng (ví dụ `npm test`).
- Nếu repo root có script test tổng hợp, có thể chạy từ root.

Ví dụ chạy test cho product:
```bash
cd product
npm install
npm test
```

Ví dụ chạy test từ root (nếu có cấu hình):
```bash
npm test
```

## Debugging & Tips
- Kiểm tra logs:
  - Docker: `docker-compose logs -f <service-name>`
  - Node: console logs hoặc debugger (ví dụ VS Code)
- Kiểm tra kết nối DB/RabbitMQ nếu service không hoạt động (URI, network trong docker-compose).
- Nếu thay đổi cấu trúc code, rebuild image: `docker-compose up --build`.

## Gợi ý cải tiến
- Thêm file `.env.example` cho từng service.
- Thêm script dev (`npm run dev`) sử dụng nodemon.
- Mở rộng CI (GitHub Actions) để chạy build & test tự động.
- Thêm OpenAPI/Swagger hoặc Postman collection cho API docs.
- Thêm hướng dẫn deploy cho staging/production (k8s, docker stack, v.v.)

## Đóng góp
Mọi đóng góp rất hoan nghênh — vui lòng mở issue mô tả vấn đề/ý tưởng hoặc gửi PR theo chuẩn contribution của repo.

---

Tạo bởi team dự án — cập nhật README khi có thay đổi cấu trúc, ports hoặc cách triển khai.
