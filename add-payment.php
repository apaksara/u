<?php
header('Content-Type: application/json');
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$billing_id = $data['billing_id'];
$amount = $data['amount'];

$sql = "INSERT INTO payments (billing_id, amount) VALUES ('$billing_id', '$amount')";
if ($conn->query($sql)) {
    echo json_encode(['message' => 'เพิ่มการชำระเงินสำเร็จ']);
} else {
    echo json_encode(['error' => $conn->error]);
}
$conn->close();
?>
