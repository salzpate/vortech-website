<?php
require 'class.sendmail.php';
$sendMail = new SendMail("info@vortech-force-krammer.de");
echo $sendMail->validateAndSend();
?>
