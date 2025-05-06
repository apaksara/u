CREATE DATABASE IF NOT EXISTS final_dorm;
USE final_dorm;

-- ตารางผู้ใช้
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- ตารางประเภทห้อง
CREATE TABLE room_types (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

-- ตารางห้องพัก
CREATE TABLE rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    number VARCHAR(10) NOT NULL UNIQUE,
    type_id INT,
    status ENUM('ว่าง', 'ไม่ว่าง') DEFAULT 'ว่าง',
    FOREIGN KEY (type_id) REFERENCES room_types(type_id)
);

-- ตารางผู้เช่า
CREATE TABLE tenants (
    tenant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    room_id INT,
    start_date DATE,
    status ENUM('ปกติ', 'ย้ายออก') DEFAULT 'ปกติ',
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

-- ตารางเรทค่าน้ำ/ไฟ/ส่วนกลาง/จอดรถ
CREATE TABLE rates (
    id INT PRIMARY KEY,
    water_rate DECIMAL(10,2),
    electric_rate DECIMAL(10,2),
    service_fee DECIMAL(10,2),
    parking_fee DECIMAL(10,2)
);

-- ตารางบิล
CREATE TABLE billings (
    billing_id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT,
    water_usage DECIMAL(10,2),
    electric_usage DECIMAL(10,2),
    billing_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

-- ตารางการชำระเงิน
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    billing_id INT,
    amount DECIMAL(10,2),
    payment_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (billing_id) REFERENCES billings(billing_id)
);

-- ตารางย้ายออก
CREATE TABLE checkouts (
    checkout_id INT AUTO_INCREMENT PRIMARY KEY,
    tenant_id INT,
    damage_fee DECIMAL(10,2),
    checkout_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (tenant_id) REFERENCES tenants(tenant_id)
);

-- insert admin เริ่มต้น
INSERT INTO users (username, password) VALUES ('admin', '1234');
