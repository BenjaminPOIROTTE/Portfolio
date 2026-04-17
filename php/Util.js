        function updateTime() {

            const now = new Date();
            document.getElementById('currentTime').textContent = now.toLocaleTimeString('fr-FR', {hour: '2-digit',minute: '2-digit',hour12: false});
            document.getElementById('currentDate').textContent = now.toLocaleDateString();

        }
        
        updateTime();
        setInterval(updateTime, 1000);
        
function RedirectGithub()
{
    
    open('https://github.com/BenjaminPOIROTTE');
}

function RedirectContact()
{
    
    open('Contact.php');
}

//Activation des boutons pour l'iframe
window.addEventListener("message", (event) => {
  if (event.data.type === "auth") {


      if (event.data.github) {
        document.getElementById("github-btn").style.display = "block";
          document.getElementById("github-btn").onclick = function() {
            window.open(event.data.githubURL, "_blank");
          };
      } else {
        document.getElementById("github-btn").style.display = "none";
      }

      if (event.data.access) {
          document.getElementById("access-btn").style.display = "block";
           document.getElementById("access-btn").onclick = function() {
            window.open(event.data.accessURL, "_blank");
          };
      }
        else {
          document.getElementById("access-btn").style.display = "none";
    } 

  }
});
