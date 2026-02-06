const ContainerMain = document.getElementById("MainContainer");

let ContainerCount=0;

const container = document.getElementById("invisible-container");

const children = document.getElementById("invisible-container").children;




for (let i = 0; i < children.length; i++) {
  const child = children[i];
    
};


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );






CreateChannelDiv(4);

function CreateChannelDiv(NumberTile)
{    
    console.log("CREATE CHANNEL DIV");


    let ArrayChilds = [];
    let ActualChildsElements = document.getElementById("invisible-container").children;
    Array.from(ActualChildsElements).forEach((child) => {
        if(ArrayChilds.length < NumberTile) {
            ArrayChilds.push(child);
            
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









