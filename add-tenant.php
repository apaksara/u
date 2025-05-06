<?php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$room_id = $data['room_id'];
$start_date = $data['start_date'];

$sql = "INSERT INTO tenants (name, room_id, start_date, status) VALUES ('$name', '$room_id', '$start_date', 'ปกติ')";
if ($conn->query($sql)) {
    echo json_encode(['message' => 'เพิ่มผู้เช่าสำเร็จ']);
} else {
    echo json_encode(['error' => $conn->error]);
}
$conn->close();
?>
