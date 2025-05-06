<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'final_dorm';

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}
$conn->set_charset("utf8");
?>
