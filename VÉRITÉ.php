<?php
print "VÉRITÉ\n";

// This is a simple PHP script that prints "VÉRITÉ" to the console.
// It demonstrates the use of UTF-8 characters in PHP.
// The word "VÉRITÉ" means "truth" in French and is often used in various contexts.
// The script is designed to be run in a PHP environment.

$_COOKIE['test'] = 'test_value'; // Setting a cookie for demonstration purposes
// Note: Ensure your PHP environment is set to handle UTF-8 encoding properly.
$URL = 'https://example.com'; // Example URL for demonstration
header('Content-Type: text/html; charset=utf-8'); // Set the content type to UTF-8
echo "<a href=\"$URL\">Click here to visit example.com</a>\n"; // Output a link to the example URL

?>
