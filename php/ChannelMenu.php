<?php


   $path = "channels";

$folders = scandir($path);

foreach ($folders as $folder) {
    if ($folder === "." || $folder === "..") {
        continue;
    }

    $folderPath = $path . "/" . $folder;
    $imagePath = $folderPath . "/miniature.jpg";

    if (is_dir($folderPath)) {

      
        $background = file_exists($imagePath)
            ? $imagePath
            : "Texture/default.jpg";

        echo "
        <a href='$folderPath/index.html' class='channel-link'>
            <div class='channel-button' style=\"background-image: url('$background');\">
            </div>
        </a>";
    }
}

?>