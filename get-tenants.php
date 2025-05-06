<?php
header('Content-Type: application/json');
require 'db.php';

$result = $conn->query("SELECT * FROM tenants");
$tenants = [];
while ($row = $result->fetch_assoc()) {
    $tenants[] = $row;
}
echo json_encode($tenants);
$conn->close();
?>
