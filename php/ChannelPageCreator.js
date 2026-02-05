/*


ON FAIS DEJA DES GOSSES  (tuile1,tuile2....)

Et ENSUITE on fais des PARENTS

screen.availHeight;
*/

const ContainerMain = document.getElementById("MainContainer");

let ContainerCount=0;

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );



  SplideTest();

  SplideTest();


function SplideTest()
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
    
    for(let i=0;i<12;i++)
    {
        defaultButton(ChannelDiv.id);
    }

}


function CreateChannelDiv()
{
    const ChannelDiv = document.createElement("div");
    ChannelDiv.className = "container-channel";
    ChannelDiv.id = "channelContainer" + ContainerCount;
    ContainerMain.appendChild(ChannelDiv);


    ContainerCount++;
    
    for(let i=0;i<12;i++)
    {
        defaultButton(ChannelDiv.id);
    }

    
}

function defaultButton(COntainerName)
{
     const ChannelDiv = document.createElement("a");
     ChannelDiv.href = "#";
     ChannelDiv.className="channel-link";

     let ChannelDivImage = document.createElement("div");
     ChannelDivImage.className="channel-button";
     ChannelDivImage.style.backgroundImage="url('https://store-images.s-microsoft.com/image/apps.23023.14308118465819703.135c559c-a52b-45de-9449-25c3e7c6d438.4f951b0f-c3b3-415c-81cb-3d2696c059ad?q=90&w=480&h=270')";

    ChannelDiv.appendChild(ChannelDivImage);

    document.getElementById(COntainerName).appendChild(ChannelDiv);
}





function createChannelPage(NumberRow, AllChildren) {



    let splideSlide = document.getElementById("splidelist");

    let Li = document.createElement("li");
    Li.className="splide__slide";
    splideSlide.appendChild(Li);



 let  ChannelDiv = document.createElement("div");
    ChannelDiv.className = "container-channel";
    ChannelDiv.id = "channelContainer" + ContainerCount;
    Li.appendChild(ChannelDiv);


    ContainerCount++;
    
    for(let i=0;i<12;i++)
    {
        defaultButton(ChannelDiv.id);
    }

}



const container = document.getElementById("invisible-container");

const children = document.getElementById("invisible-container").children;


for (let i = 0; i < children.length; i++) {
  const child = children[i];
  console.log(child);
    
};
