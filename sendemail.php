<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "wilfredd.singini@gmail.com"; // Your email address
    $subject = "Contact Us Form Submission";
    $headers = "From: $email";
    $message = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}
?>
