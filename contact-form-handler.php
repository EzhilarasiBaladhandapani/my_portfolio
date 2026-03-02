<?php
// Simple contact form handler for sending email
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    if ($name && $email && $message) {
        $to = 'ezhilarasibr@gmail.com';
        $subject = 'Portfolio Contact Form Message';
        $body = "Name: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\n";
        if (mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo 'Message sent successfully!';
        } else {
            http_response_code(500);
            echo 'Failed to send message.';
        }
    } else {
        http_response_code(400);
        echo 'Please fill in all fields.';
    }
} else {
    http_response_code(403);
    echo 'Forbidden.';
}
