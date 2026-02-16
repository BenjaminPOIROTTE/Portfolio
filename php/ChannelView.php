<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Channel View</title>
    <link rel="stylesheet" href="ChannelView.css">
</head>


<div class="backgroundImage" id="backgroundImage">

<?php 

$selectedChannel = $_GET['selectedchannel'];

$imagePath ='channels/' . $selectedChannel . "/miniature.jpg";

$textPath = 'channels/' . $selectedChannel . "/description.txt";

echo "<img src='$imagePath' alt='Channel Image' id='channelImage' class='channelImage'>";

?>
</div>

<div class="channelDescription" id="channelDescription">
    <h1 id="channelTitle"><?php echo $selectedChannel; ?></h1>
    <p id="channelText">

<?php 
    if (file_exists($textPath)) {
        $description = file_get_contents($textPath);
        echo nl2br($description); 
    } else {
        echo "Description non disponible.";
    }
?>
    

    </p>
</div>

<div class="bottomUI" id="bottomUI">
    <button id="backButton" class="uiButton">Back</button>
    <button id="goButton" class="uiButton">GO</button>
</div>


<script>
  const urlParams = new URLSearchParams(window.location.search);
  const SelectedValue = urlParams.get('selectedchannel');
  console.log(SelectedValue);  
</script>


<body>
    
</body>




</html>