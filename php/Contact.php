<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Contact</title>
  <link rel="stylesheet" href="Contact.css">

</head>

<body>
<div class="header">ME CONTACTER</div>
<div class="middle">
<div class="card">


 <form action="Email/SendMail.php" method="POST"  id="contactForm">
  <input type="text" name="name" placeholder="Nom" required>
  <input type="email" name="email" placeholder="Email" required>
  <textarea name="message" maxlength="1500" placeholder="Message" required></textarea>
  <button type="submit" id="submitBtn">Envoyer</button>
</form>

  <div class="msg" id="msg"></div>
</div>
</div>
<div class="footer">

<button name="RetourBtn" id="RetourBtn" onclick="RetourClick()">RETOUR</button>

</div>
<input type="text" name="website" style="display:none">

</body>
</html>

<script src="Contact.js"></script>