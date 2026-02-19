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

$backgroundColor = "#ffffff"; 
    if (file_exists($textPath)) {
        
        $description = file_get_contents($textPath);
      if (preg_match('/color:\s*(#[a-fA-F0-9]{6})/', $description, $matches)) {
        $backgroundColor = $matches[1];

        $description = preg_replace('/color:\s*#[a-fA-F0-9]{6}/', '', $description);
    }
        echo nl2br($description); 
        echo "<script>
        
    document.getElementById('channelDescription').style.backgroundColor = '$backgroundColor';
        
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
  console.log(SelectedValue);  
</script>


<body>
    
</body>




</html>