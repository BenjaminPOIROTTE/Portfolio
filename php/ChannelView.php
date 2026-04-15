<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Channel View</title>
    <link rel="stylesheet" href="ChannelView.css">
    <link rel="stylesheet" href="VerticalCSS.css">

</head>


<div class="backgroundImage" id="backgroundImage">

<?php 

$selectedChannel = $_GET['selectedchannel'];

$gifPath = 'channels/' . $selectedChannel . "/miniature.gif";
$jpgPath = 'channels/' . $selectedChannel . "/miniature.jpg";

$textPath = 'channels/' . $selectedChannel . "/description.txt";

if (file_exists($gifPath)) {
    $imagePath = $gifPath;
} elseif (file_exists($jpgPath)) {
    $imagePath = $jpgPath;
} else {
    $imagePath = "default.jpg";
}

echo "<div class='backgroundImage' style='background-image: url($imagePath)'></div>";

?>
</div>

<div class="channelDescription" id="channelDescription">
    <h1 id="channelTitle"><?php echo $selectedChannel; ?></h1>
    <p id="channelText">

<?php 
// Lecture du fichier de description et affichage du texte
$backgroundColor = "#ffffff"; 
    if (file_exists($textPath)) {
        
        $description = file_get_contents($textPath);
      if (preg_match('/color:\s*(#[a-fA-F0-9]{6})/', $description, $matches)) { // Recherche de la couleur de fond dans le texte 
        $backgroundColor = $matches[1];

        $description = preg_replace('/color:\s*#[a-fA-F0-9]{6}/', '', $description);
    }
        echo nl2br($description); 
        echo "<script>
        
    document.getElementById('channelDescription').style.backgroundColor = '$backgroundColor'+'80';
        
        </script>";


    } else {
        echo "Description non disponible.";
    }

    



?>
    

    </p>
</div>



<script>


  const urlParams = new URLSearchParams(window.location.search);
  const SelectedValue = urlParams.get('selectedchannel');




</script>


<body>
    
</body>




</html>