const button = document.querySelector('button');

let musicPlaying = false;
let musicAudio;

contactButtonClicked = () => {
    if (musicPlaying) {
    const audio = new Audio('../Sound/Sample_0000.wav');
        audio.volume = 0.5;

    audio.play();}
}

githubButtonClicked = () => {
      if (musicPlaying) {
    const audio = new Audio('../Sound/Sample_0001.wav');
    audio.volume = 0.7;

    audio.play();
    }
}

channelClicked= () => {
  if (musicPlaying) {
    const audio = new Audio('../Sound/Sample_0002.wav');
        audio.volume = 0.7;

    audio.play();}
}
closeChannelClicked= () => {
     if (musicPlaying) {
    const audio = new Audio('../Sound/wiiMenu.mp3');
    audio.volume = 0.8;
    audio.play();}
}


musicButtonClicked = (newMusic) => {

    if (!musicAudio) {
        musicAudio = new Audio('../Sound/wiiMenu.mp3');
     
        musicAudio.loop = true;
    }
    if (musicPlaying) {
        musicAudio.pause();
        musicPlaying = false;
        document.getElementById('musicBtn').style.backgroundImage = "url('../Texture/FrontMenu/volume_off_100dp_79797B_FILL0_wght400_GRAD0_opsz48.png')";
    } else {
        musicAudio.play();
        musicPlaying = true;
        document.getElementById('musicBtn').style.backgroundImage = "url('../Texture/FrontMenu/volume_up_100dp_79797B_FILL0_wght400_GRAD0_opsz48.png')";
    }
}
document.addEventListener("DOMContentLoaded", function() {


});
