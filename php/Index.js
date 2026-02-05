/*const container = document.getElementById("channelContainer");

const children = document.getElementById("channelContainer").children;

for (let i = 0; i < children.length; i++) {
  const child = children[i];
  console.log(child.textContent);
    
};*/


function createChannelPage(NumberRow, AllChildren) {
    let actualRow =0;
    
    for (let i = 0; i < AllChildren.length; i++) {
        if(actualRow ==0){
            const rowDiv = document.createElement("div");
            rowDiv.className = "channel-row";
            container.appendChild(rowDiv);
            
            AllChildren[i].appendChild(rowDiv);
            actualRow++;
        }
        else if(actualRow < NumberRow){
            const rowDiv = container.lastChild;
            rowDiv.appendChild(AllChildren[i]);
            actualRow++;
        }
    }


}