<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="FrontMenu.css">
<script src="sound.js"></script>
    <title>Front Menu</title>s
</head>
<body>
  
<div class="footer">


  <button class="WiiBtn ContactBtn" onclick="contactButtonClicked()"></button>
<div id="volumeControl" class="volume-control">
  <button id="musicBtn" class="musicBtn"  onclick="musicButtonClicked()">
 
  </button>
  


</div>




  <div class="center">
    <div class="time" id="currentTime"></div>
    <div class="date" id="currentDate"></div>
  </div>

  <button class="WiiBtn GithubBtn" onclick="githubButtonClicked()"></button>
</div>

    <script>
        function updateTime() {

            const now = new Date();
            document.getElementById('currentTime').textContent = now.toLocaleTimeString('fr-FR', {hour: '2-digit',minute: '2-digit',hour12: false});
            document.getElementById('currentDate').textContent = now.toLocaleDateString();

        }
        
        updateTime();
        setInterval(updateTime, 1000);
        

    </script>
</body>
</html>