<?php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$tenant_id = $data['tenant_id'];
$damage_fee = $data['damage_fee'];

$sql = "INSERT INTO checkouts (tenant_id, damage_fee) VALUES ('$tenant_id', '$damage_fee')";
if ($conn->query($sql)) {
    echo json_encode(['message' => 'เพิ่มการย้ายออกสำเร็จ']);
} else {
    echo json_encode(['error' => $conn->error]);
}
$conn->close();
?>
