<?php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$number = $data['number'];
$type_id = $data['type_id'];
$status = $data['status'];

$sql = "INSERT INTO rooms (number, type_id, status) VALUES ('$number', '$type_id', '$status')";
if ($conn->query($sql)) {
    echo json_encode(['message' => 'เพิ่มห้องสำเร็จ']);
} else {
    echo json_encode(['error' => $conn->error]);
}
$conn->close();
?>
