const ContainerMain = document.getElementById("MainContainer");

let ContainerCount=0;

const container = document.getElementById("invisible-container");

const children = document.getElementById("invisible-container").children;



let resizeTimeout;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(reportWindowSize, 150);
   
});

for (let i = 0; i < children.length; i++) {
  const child = children[i];
    
};


reportWindowSize();
let splide = null;




function reportWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    switch (true) {
     
        case width > 1200 && height > 800:
            CreateChannelDiv(12);
            break;

    
        case width > 800 && height > 600:
            CreateChannelDiv(8);
            break;

  
        case width <= 800 || height <= 600:
            CreateChannelDiv(4);
            break;
    }


requestAnimationFrame(() => {
        initSplide();
    });
    
}


function initSplide() {
    if (splide) {
        splide.destroy(true); // true = clean DOM
        splide = null;
    }

    splide = new Splide('#image-carousel', {
        type: 'slide',
        perPage: 1,
        pagination: true,
        arrows: true,
    });

    splide.mount();
}

function ClearChannelDiv()
{
    let splideSlide = document.getElementById("splidelist");
    while (splideSlide.firstChild) {
        splideSlide.removeChild(splideSlide.firstChild);
    }  

    alert("CLEAR CHANNEL DIV");
     

    CreateChannelDiv(12);



}

function CreateChannelDiv(NumberTile)
{    
    const splideSlide = document.getElementById("splidelist");
    splideSlide.innerHTML = "";
    ContainerCount = 0;

    let ArrayChilds = [];
    let ActualChildsElements = document.getElementById("invisible-container").children;
    Array.from(ActualChildsElements).forEach((child) => {
        if(ArrayChilds.length < NumberTile) {
        ArrayChilds.push(child.cloneNode(true));            
        }
        if(ArrayChilds.length == NumberTile) {
          CreateSlide(ArrayChilds);
          ArrayChilds=[];
        }

    });

    if(ArrayChilds.length > 0) {
        let emptyTile = document.createElement("a");
        emptyTile.className = "channel-link";
        emptyTile.id = "emptyTile";
       
        let emptyDiv = document.createElement("div");
        emptyDiv.className = "channel-button";
        emptyDiv.style.backgroundImage = "url('../Texture/WiiNoIcon.png')";
        emptyTile.appendChild(emptyDiv);

        
        for(let i = ArrayChilds.length; i < NumberTile; i++) {
            ArrayChilds.push(emptyTile.cloneNode(true));
        }
        CreateSlide(ArrayChilds);
    }

}







function CreateSlide(ArrayChilds)
{

    let splideSlide = document.getElementById("splidelist");
    
    let Li = document.createElement("li");
    Li.className="splide__slide";
    splideSlide.appendChild(Li);

 let  ChannelDiv = document.createElement("div");
    ChannelDiv.className = "container-channel";
    ChannelDiv.id = "channelContainer" + ContainerCount;
    Li.appendChild(ChannelDiv);


    ContainerCount++;
    
    console.log(ArrayChilds);

ArrayChilds.forEach(element => {

    element.addEventListener("click", function(e) {
        e.preventDefault();
        openChannel(this.getAttribute("href"));
    });

    ChannelDiv.appendChild(element);
});


}



function CreateButton(ContainerName ,ArrayChilds)
{

    ArrayChilds.forEach(element => {
    const ChannelDiv = document.createElement("a");
     ChannelDiv.href = "#";
     ChannelDiv.className="channel-link";

     let ChannelDivImage = document.createElement("div");
     ChannelDivImage.className="channel-button";
     ChannelDivImage.style.backgroundImage="url('https://store-images.s-microsoft.com/image/apps.23023.14308118465819703.135c559c-a52b-45de-9449-25c3e7c6d438.4f951b0f-c3b3-415c-81cb-3d2696c059ad?q=90&w=480&h=270')";

    ChannelDiv.appendChild(ChannelDivImage);

    document.getElementById(ContainerName).appendChild(ChannelDiv);

    });

  
}


// Example usage:



function openChannel(url) {
    const screen = document.getElementById("channel-screen");
    const frame = document.getElementById("channel-frame");

    frame.src = url;
    screen.classList.add("active");
}



function closeChannel() {
    const screen = document.getElementById("channel-screen");
    const frame = document.getElementById("channel-frame");

    screen.classList.remove("active");
    frame.src = "";
}
document.getElementById("close-channel")
        .addEventListener("click", closeChannel);