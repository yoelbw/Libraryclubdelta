<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Email contentd
$to = 'yoelwicaksono1@gmail.com'; // Replace with your email
$subject = 'Message from your website';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";
$headers = "From: $name <$email>";

// Send email
if (mail($to, $subject, $body, $headers)) {
  echo 'Email sent successfully!';
} else {
  echo 'Error sending email!';
}
?>