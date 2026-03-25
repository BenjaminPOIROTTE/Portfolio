<?php


   $path = "channels";

$folders = scandir($path);

foreach ($folders as $folder) {
    if ($folder === "." || $folder === "..") {
        continue;
    }

    $folderPath = $path . "/" . $folder;
    $gifPath = $folderPath . "/miniature.gif";
    $jpgPath = $folderPath . "/miniature.jpg";

    if (is_dir($folderPath)) {

       if (file_exists($gifPath)) {
            $background = $gifPath;
        } elseif (file_exists($jpgPath)) {
            $background = $jpgPath;
        } else {
            $background = "Texture/WiiNoIcon.png";
        }

        echo "
        <a href='ChannelView.php?selectedchannel=$folder' id='$folder' class='channel-link'>
            <div class='channel-button' style=\"background-image: url('$background');\" '>
            </div>
        </a>";
    }
}

?>