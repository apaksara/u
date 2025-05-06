<?php
header('Content-Type: application/json');
require 'db.php';

$result = $conn->query("SELECT * FROM payments");
$payments = [];
while ($row = $result->fetch_assoc()) {
    $payments[] = $row;
}
echo json_encode($payments);
$conn->close();
?>
