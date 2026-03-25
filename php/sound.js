const button = document.querySelector('button');

let musicPlaying = false;
let musicAudio;

contactButtonClicked = () => {
    const audio = new Audio('../Sound/Sample_0000.wav');
    audio.play();
}

githubButtonClicked = () => {
    const audio = new Audio('../Sound/Sample_0001.wav');
    audio.play();
    
}

channelClicked= () => {

    const audio = new Audio('../Sound/Sample_0002.wav');
    audio.play();
}
closeChannelClicked= () => {
   
    const audio = new Audio('../Sound/wiiMenu.mp3');
    audio.play();
}


musicButtonClicked = (newMusic) => {
    console.log("Music button clicked");
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



