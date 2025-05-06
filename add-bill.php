<?php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$room_id = $data['room_id'];
$water_usage = $data['water_usage'];
$electric_usage = $data['electric_usage'];

$sql = "INSERT INTO billings (room_id, water_usage, electric_usage) VALUES ('$room_id', '$water_usage', '$electric_usage')";
if ($conn->query($sql)) {
    echo json_encode(['message' => 'เพิ่มบิลสำเร็จ']);
} else {
    echo json_encode(['error' => $conn->error]);
}
$conn->close();
?>
