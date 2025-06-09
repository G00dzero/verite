<?php
print_r($_SERVER);
echo "<br>";
echo "First Name: " . htmlspecialchars($_POST['name'] ?? '') . "<br>";
echo "Last Name: " . htmlspecialchars($_POST['Last_name'] ?? '') . "<br>";
echo "Email: " . htmlspecialchars($_POST['email1'] ?? '') . "<br>";
echo "Confirm Email: " . htmlspecialchars($_POST['email2'] ?? '') . "<br>";
echo "Password: " . htmlspecialchars($_POST['Password'] ?? '') . "<br>";
echo "Confirm Password: " . htmlspecialchars($_POST['Confirm_Password'] ?? '') . "<br>";
?>