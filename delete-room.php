<?php
header('Content-Type: application/json');
require 'db.php';

$id = $_GET['id'];
$sql = "DELETE FROM rooms WHERE room_id = $id";
if ($conn->query($sql)) {
    echo json_encode(['message' => 'ลบห้องสำเร็จ']);
} else {
    echo json_encode(['error' => $conn->error]);
}
$conn->close();
?>
