<?php
// Contact + waitlist form handler. Success redirects to the styled /thanks.html page.
function back_with_error($msg) {
    $safe = json_encode($msg);
    echo "<script>alert($safe); window.location.href='/#contact';</script>";
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    back_with_error('Invalid request.');
}

$name    = htmlspecialchars(trim($_POST['name']    ?? ''));
$email   = trim($_POST['email'] ?? '');
$phone   = htmlspecialchars(trim($_POST['phone']   ?? ''));
$topic   = htmlspecialchars(trim($_POST['topic']   ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    back_with_error('Please fill in your name, email, and message.');
}

// FILTER_VALIDATE_EMAIL rejects newlines, which also blocks header injection via Reply-To.
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    back_with_error("That email address doesn't look right. Please check it and try again.");
}

$to      = "rayed@rhtechai.com";
$subject = $topic !== '' ? "New request: $topic — RHTECH AI" : "New website message — RHTECH AI";
$body    = "Name: $name\nEmail: $email\nPhone: $phone\nTopic: $topic\n\nMessage:\n$message";
$headers = "From: no-reply@rhtechai.com\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    header('Location: /thanks.html', true, 303);
    exit;
}
back_with_error('Your message did not send. Please email rayed@rhtechai.com directly.');
