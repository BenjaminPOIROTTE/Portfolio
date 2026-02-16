<!DOCTYPE html>
<html lang="en">
<script src=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js "></script>


<link href=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css " rel="stylesheet">

<head>
    <link rel="stylesheet" href="index.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
</head>
<body class="channel-list">
   <div class="Main-Container" id="MainContainer">
  <div class="invisible-container" id="invisible-container">
      <?php include 'ChannelMenu.php'; ?>
    </div>

<section id="image-carousel" class="splide" >
  <div class="splide__track">
		<ul class="splide__list" id="splidelist">
    
		</ul>
  </div>
</section>



   </div>







<div id="channel-screen" class="channel-screen">
    <div class="channel-inner">
        <button id="close-channel">Retour Menu</button>
        <iframe id="channel-frame"></iframe>
    </div>
</div>


</body>
<?php include 'FrontMenu.php'; ?>

</html>



<script src="ChannelPageCreator.js"></script>

