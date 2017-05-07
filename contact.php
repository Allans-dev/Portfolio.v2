<?php

session_start();

require_once 'libs/phpmailer/PHPMailerAutoload.php';

$fields = [
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'query-type' => $_POST['query-type'],
    'message' => $_POST['message']
]

$m = new PHPMAiler;

$m->isSMTP();
$m->SMTPAuth = true;



$m->Host = 'smtp.gmail.com';
$m->Username = 'allanswebdev@gmail.com';
$m->Password = 'Poker76537';
$m->SMTPSecure = 'ssl';
$m->Port = 465;

$m->isHTML();

$m->Subject = 'Contact Form Submitted' . $fields["query-type"];
$m->Body = 'From:' . $fields["name"] . '(' . $fields["email"] . ') <p>' . $fields["message"] . '</p>';
$m->FromName = 'Portfolio';
$m->AddAddress('allanswebdev@gmail.com', 'Allan Cheung');

if ($m->send()) {
    
    
}