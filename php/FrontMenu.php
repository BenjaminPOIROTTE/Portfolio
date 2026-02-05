<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="FrontMenu.css">

</head>
<body>
  
<div class="footer">

 <script src="FrontMusic.js"></script>

  <button class="WiiBtn" onclick="handleButton1()"></button>
<div id="volumeControl" class="volume-control">
  <input type="range" class="vertical" id="volume" name="volume" min="0" max="100" value="0" />
<audio id="music" src="../Sound/wiiMenu.mp3" loop></audio>
</div>




  <div class="center">
    <div class="time" id="currentTime"></div>
    <div class="date" id="currentDate"></div>
  </div>

  <button class="MailBtn" onclick="handleButton2()"></button>
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