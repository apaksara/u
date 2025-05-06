<?php
header('Content-Type: application/json');
require 'db.php';

$result = $conn->query("SELECT * FROM checkouts");
$checkouts = [];
while ($row = $result->fetch_assoc()) {
    $checkouts[] = $row;
}
echo json_encode($checkouts);
$conn->close();
?>
