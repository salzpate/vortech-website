<?php
class SendMail {

  private $to;

  private $accepted_origins = array("http://localhost", "https://vortech-force-krammer.de", "https://www.vortech-force-krammer.de");

  function __construct($to) {
    $this->to = $to;
  }

  private function buildMessage($status, $message) {
    return json_encode(array("status" => $status, "message" => $message));
  }

  function send($from, $subject, $message) {
    $header = "Content-type: text/plain; charset=utf-8" . "\r\n" .
              "From: Vortech-Homepage <site100014362@ngcobalt364.manitu.net>" . "\r\n" .
              "Reply-To: " . $from . "\r\n" .
              "X-Mailer: PHP/" . phpversion();

    if (mail($this->to, $subject, $message, $header)) {
      $msg = $this->buildMessage("success", "Ihre Nachricht wurde erfolgreich versendet");
    } else {
      $errorMessage = error_get_last()['message'];
      $msg = $this->buildMessage("error", "Ihre Nachricht konnte leider nicht versendet werden!");
    }
    return $msg;
  }

  private function prepare() {
    if (isset($_SERVER['HTTP_ORIGIN'])) {
      if (in_array($_SERVER['HTTP_ORIGIN'], $this->accepted_origins)) {
        header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
      } else {
        header("HTTP/1.0 403 Origin Denied");
        throw new Exception('Origin Denied');
      }
    }

    if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
      throw new Exception('Request method must be POST!');
    }

    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if(strcasecmp($contentType, 'application/json') == 0) {
        throw new Exception('Content type must be: application/json');
    }

    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);

    if(!is_array($decoded)) {
      throw new Exception('Received content contained invalid JSON!');
    }

    return $decoded;
  }

  function validateAndSend() {
    $data = $this->prepare();

    if(!empty($data["email"])) {
      $msg = $this->buildMessage("success", "Ihre E-Mail wurde erfolgreich versendet");
    } else if (empty($data["antwort"]) || (!filter_var($data["antwort"], FILTER_VALIDATE_EMAIL) && !preg_match('/^(\+|\()?(\d+[ \+\(\)\/-]*)+$/', $data["antwort"]))) {
      $msg = $this->buildMessage("error", "Ihre E-Mail Adresse oder Telefonnummer ist nicht valide. Bitte geben Sie eine gültige ein!");
    } else if (empty($data["datenschutz"])) {
      $msg = $this->buildMessage("error", "Sie müssen bestätigen die Datenschutzerklärung gelesen zu haben!");
    } else {

      $subject = "E-Mail Anfrage aus der Vortech-Force-Homepage";

      $mailmessage .= "Anfrage über die Vortech-Force-Homepage:\r\n\n";
      $mailmessage .= "Name: " . $data["name"] . "\r\n";
      $mailmessage .= "Kontakt: " . $data["antwort"] . "\r\n\n";

      if($data["nachricht"]) {
        $mailmessage .= "Nachricht:\r\n\n" . $data["nachricht"] . "\r\n";
      }
      $msg = $this->send($data["antwort"], $subject, $mailmessage);
    }

    header('Content-Type: application/json; charset=utf-8');
    return $msg;
  }
}
?>
