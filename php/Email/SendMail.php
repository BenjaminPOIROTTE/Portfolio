<?php

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;





header('Content-Type: application/json');

function EnvoieEmail($name, $email, $message) {
    $config = require 'config.php';
    $mail = new PHPMailer(true);
    try {
        // Paramètres du serveur SMTP
        $mail->isSMTP();                                        // Utiliser SMTP
        $mail->Host = $config["smtp_host"];                       // Remplacez par le serveur SMTP
        $mail->SMTPAuth = true;                                 // Activer l'authentification SMTP
        $mail->Username = $config["smtp_user"];            // Votre adresse email
        $mail->Password = $config["smtp_pass"];                 // Votre mot de passe
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;     // Activer TLS (ou 'ssl' pour SSL)
        $mail->Port = $config["smtp_port"];                                      // Port SMTP, 587 pour TLS ou 465 pour SSL

        // Expéditeur et destinataire
        $mail->setFrom($config["from_mail"], $config["from_name"]);
        $mail->addAddress($config["to_email"], 'Benjamin Poirotte');     // Ajouter un destinataire

        // Contenu de l'email
        $mail->isHTML(true);                               // Activer HTML
        $mail->Subject = "Nouveau message de $name";
        $mail->Body = "$email a envoyé le message suivant : <br><br> $message";
        $mail->AltBody = "$email a envoyé un message"; // Version texte brut

        // Envoyer l'email
        $mail->send();
        return true;

    } catch (Exception $e) {
        return false;
    }
}


if ($_SERVER["REQUEST_METHOD"] === "POST") {
if (!empty($_POST["website"])) {
    echo json_encode(["success" => false]);
    exit;
}
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $success = EnvoieEmail($name, $email, $message);

    echo json_encode([
        "success" => $success
    ]);
}
?>