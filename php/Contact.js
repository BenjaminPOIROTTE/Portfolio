const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "Envoi...";
    msg.innerHTML = "⏳ Envoi en cours...";

    const formData = new FormData(form);

    const response = await fetch("Email/SendMail.php", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        msg.innerHTML = "✔ Message envoyé !";
        msg.style.color = "green";
        form.reset();
    } else {
        msg.innerHTML = "❌ Erreur d'envoi";
        msg.style.color = "red";
    }

    btn.disabled = false;
    btn.innerText = "Envoyer";
});



function RetourClick() {
    window.location.href = "index.php";
}