<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Contact</title>
  <link rel="stylesheet" href="Contact.css">

</head>

<body>

<div class="card">
  <h2>Contact</h2>

 <form action="Email/SendMail.php" method="POST"  id="contactForm">
  <input type="text" name="name" placeholder="Nom" required>
  <input type="email" name="email" placeholder="Email" required>
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit" id="submitBtn">Envoyer</button>
</form>

  <div class="msg" id="msg"></div>
</div>

<input type="text" name="website" style="display:none">

</body>
</html>

<script src="Contact.js"></script>