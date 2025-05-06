<?php
header('Content-Type: application/json');
require 'db.php';

$id = $_GET['id'];
$sql = "DELETE FROM tenants WHERE tenant_id = $id";
if ($conn->query($sql)) {
    echo json_encode(['message' => 'ลบผู้เช่าสำเร็จ']);
} else {
    echo json_encode(['error' => $conn->error]);
}
$conn->close();
?>
