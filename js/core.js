var charContainer = document.createElement("div");
var characters=["Dustin","Bryan","Matt","Tom","Ian"];
var main = document.getElementsByTagName("main")[0];
var charImgs=[];
var tempCounter = 0;
var blocksCreated = 0;
var blockMargin = 10;

function init(){
	charContainer.setAttribute("id", "charContainer");
	document.getElementsByTagName("main")[0].appendChild(charContainer);
	charContainer = document.getElementById("charContainer");
	requestAnimationFrame(addCharBlock);
}

function addCharBlock(){
	if(blocksCreated < characters.length){
		if(tempCounter >= .03){
			var charBlock = document.createElement("div");
			charBlock.setAttribute("class", "charBlock");
			charContainer.appendChild(charBlock);
			charBlock.style.width = (charContainer.clientWidth-((blockMargin*2)*characters.length))/characters.length+"px";
			charBlock.style.height =(charContainer.clientWidth-((blockMargin*2)*characters.length))/characters.length+"px";
			charBlock.style.margin = blockMargin + "px";
			$(charBlock).stop().animate({opacity:1},600);
			blocksCreated++;
			tempCounter = 0;
		}else{
			tempCounter+=.01;			
		}  
		requestAnimationFrame(addCharBlock);
	}
}
