# Cấu Hình Máy Chủ Ubuntu cho Triển Khai Docker với GitHub Actions

Đường dẫn cấu hình file github workflows nằm ở [đây](https://github.com/ngocthanhdoan/QRWeb/blob/main/.github/workflows/deploy.yml).

# Hướng Dẫn Cấu Hình Máy Chủ Ubuntu cho Triển Khai Docker với GitHub Actions

## Điều Kiện Cần Thiết

Trước khi bắt đầu cấu hình máy chủ Ubuntu, hãy đảm bảo rằng máy chủ của bạn đáp ứng các điều kiện sau:

1. **Máy Chủ Ubuntu**: Máy chủ phải chạy hệ điều hành Ubuntu. Các phiên bản phổ biến như Ubuntu 20.04 hoặc Ubuntu 22.04 là phù hợp.

2. **Kết Nối Mạng**: Máy chủ cần có kết nối mạng ổn định và có thể tiếp nhận kết nối từ GitHub Actions qua SSH.

3. **Quyền Truy Cập SSH**: Bạn cần có quyền SSH vào máy chủ và cần thiết lập SSH key để GitHub Actions có thể kết nối đến máy chủ mà không cần mật khẩu.

4. **Cài Đặt Docker**: Máy chủ cần cài đặt Docker để chạy container từ các image được xây dựng và đẩy từ GitHub Actions.

5. **Cổng Mạng Mở**: Cổng mạng mà ứng dụng Docker của bạn sẽ sử dụng (ví dụ: `8082`) cần phải mở trên tường lửa của máy chủ.

## Hướng Dẫn Cấu Hình Máy Chủ

### 1. Cài Đặt Docker và Docker Compose

#### Cài Đặt Docker

1. Cập nhật danh sách gói và cài đặt Docker:

    ```bash
    sudo apt-get update
    sudo apt-get install -y docker.io
    ```

2. Bắt đầu dịch vụ Docker và thiết lập để tự động khởi động khi hệ thống khởi động:

    ```bash
    sudo systemctl start docker
    sudo systemctl enable docker
    ```

#### Cài Đặt Docker Compose (Tùy Chọn)

Mặc dù không cần Docker Compose cho tệp hành động hiện tại, bạn có thể cài đặt nó để dễ quản lý nhiều container:

1. Tải Docker Compose và cấp quyền thực thi:

    ```bash
    sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d '"' -f 4)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    ```

### 2. Cấu Hình SSH để GitHub Actions Kết Nối

#### Thêm Khóa Công Khai vào Máy Chủ

1. Thêm khóa công khai SSH vào tệp `authorized_keys` của người dùng trên máy chủ:

    ```bash
    cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
    ```

#### Kiểm Tra Quyền Truy Cập

2. Đảm bảo bạn có thể SSH vào máy chủ mà không cần mật khẩu, chỉ cần khóa riêng.

### 3. Cấu Hình Bảo Mật và Mạng

#### Mở Cổng Mạng

1. Đảm bảo rằng cổng mà Docker container của bạn sử dụng (ví dụ: `8082`) đã được mở trên tường lửa của máy chủ:

    ```bash
    sudo ufw allow 8082/tcp
    ```

#### Kiểm Tra Docker

2. Đảm bảo rằng Docker có thể chạy các container mà không gặp lỗi.

### 4. Cấu Hình Thông Tin Đăng Nhập Docker Hub

#### Tạo Tài Khoản Docker Hub

1. Nếu bạn chưa có tài khoản Docker Hub, tạo một tài khoản mới.

2. Sử dụng các bí mật (secrets) trong GitHub Repository của bạn để đăng nhập vào Docker Hub:

    - `DOCKER_USERNAME`
    - `DOCKER_PASSWORD`

### 5. Cấu Hình GitHub Secrets

#### Thêm Các Bí Mật (Secrets) vào GitHub Repository

1. Truy cập vào [GitHub Repository Settings](https://github.com/{owner}/{repo}/settings/secrets) của bạn.

2. Thêm các bí mật sau:

    - `SSH_HOST`: Địa chỉ IP hoặc tên miền của máy chủ Ubuntu.
    - `SSH_USER`: Tên người dùng SSH.
    - `SSH_PRIVATE_KEY`: Khóa riêng SSH mà bạn sử dụng để xác thực.

### 6. Cài Đặt Docker cho Người Dùng Không Phải Root (Tùy Chọn)

#### Thêm Người Dùng vào Nhóm Docker

1. Nếu bạn muốn chạy Docker không cần quyền `sudo`, hãy thêm người dùng vào nhóm Docker:

    ```bash
    sudo usermod -aG docker $USER
    ```

2. Đăng xuất và đăng nhập lại để thay đổi nhóm có hiệu lực.

## Kết Luận

Sau khi hoàn thành các bước trên, máy chủ Ubuntu của bạn sẽ sẵn sàng để nhận triển khai Docker từ GitHub Actions. Bạn có thể kiểm tra và đảm bảo rằng mọi thứ hoạt động như mong đợi trước khi thực hiện triển khai chính thức.
![image](https://github.com/user-attachments/assets/2269b44f-97e5-4ade-84cd-d1893e4eee0d)
![image](https://github.com/user-attachments/assets/4b6be472-fc28-4b2e-a804-09aa751babc4)




