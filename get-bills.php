<?php
header('Content-Type: application/json');
require 'db.php';

$result = $conn->query("SELECT * FROM billings");
$bills = [];
while ($row = $result->fetch_assoc()) {
    $bills[] = $row;
}
echo json_encode($bills);
$conn->close();
?>
