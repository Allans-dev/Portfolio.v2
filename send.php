<?php

$name = $_POST['name'];
$email = $_POST['email'];
$queryType = $_POST['query-type'];
$message = $_POST['message'];

$to = "allanswebdev@gmail.com";
$subject = "$email: $queryType";
$body = "From: $name ($email) \n\n $message"

mail ($to, $subject, $body)    
    
echo "Thanks for your message! \n <a href='www.allancheung.com'>click here to go back</a> "
    
?>