var charContainer = document.createElement("div");
var characters=[];
characters[0] = "Dustin";
characters[1] = "Bryan";
characters[2] = "Matt";
characters[3] = "Tom";
characters[4] = "Ian";
var tempCounter = 0;
var blocksCreated = 0;

function init(){
	charContainer.setAttribute("id", "charContainer");
	document.getElementsByTagName("main")[0].appendChild(charContainer);
	charContainer = document.getElementById("charContainer");
	requestAnimationFrame(addCharBlock);
}

function addCharBlock(){
	if(blocksCreated < characters.length){
		if(tempCounter >= .5){
			var charBlock = document.createElement("div");
			charBlock.setAttribute("class", "charBlock");
			charContainer.appendChild(charBlock);
			blocksCreated++;
			tempCounter = 0;
		}else{
			tempCounter+=.01;			
		}  
		requestAnimationFrame(addCharBlock);
	}
}
