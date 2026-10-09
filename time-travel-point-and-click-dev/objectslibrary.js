function interactableObjects(name, type, targetLocation, currentLocation, height, width, y, x){
	document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", name)
	document.getElementById(name).setAttribute("src", "sprite-blank.png")
	document.getElementById(name).style.height = height+"px"
	if(width != undefined){ //Only for stretchable objects, such as invisible surface area of clickable events
		document.getElementById(name).style.width = width+"px"
	}
	document.getElementById(name).style.top = y+"px"
	document.getElementById(name).style.left = x+"px"
	document.getElementById(name).className = name + " interactable"
	if(type="screentransition"){
		document.getElementById(name).setAttribute("onclick", "screentransition('"+targetLocation+"', '"+currentLocation+"')")
	}
}


//Recurring interactable objects
var arrowleft = function(targetLocation, currentLocation, y, x, height, width){
	interactableObjects("arrowleft", "screentransition", targetLocation, currentLocation, height = 300, width = 100, y, x)
}
var arrowright = function(targetLocation, currentLocation, y, x, height, width){
	interactableObjects("arrowright", "screentransition", targetLocation, currentLocation, height = 300, width = 100, y, x)	
}
var arrowdownleft = function(targetLocation, currentLocation, y, x, height, width){
	interactableObjects("arrowdownleft", "screentransition", targetLocation, currentLocation, height = 200, width = 300, y, x)		
}
var arrowdownright = function(targetLocation, currentLocation, y, x, height, width){
	interactableObjects("arrowdownright", "screentransition", targetLocation, currentLocation, height = 200, width = 300, y, x)	
}
var arrowupleft = function(targetLocation, currentLocation, y, x, height, width){
	interactableObjects("arrowupleft", "screentransition", targetLocation, currentLocation, height = 200, width = 300, y, x)
}
var arrowupright = function(targetLocation, currentLocation, y, x, height, width){
	interactableObjects("arrowupright", "screentransition", targetLocation, currentLocation, height = 200, width = 300, y, x)
}
var arrowupforward = function(targetLocation, currentLocation, y, x, height, width){
	interactableObjects("arrowupforward", "screentransition", targetLocation, currentLocation, height = 200, width = 300, y, x)
}

var man = function(size, y, x){
	document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", "man")
	document.getElementById("man").setAttribute("src", "sprite-man.png")
	document.getElementById("man").style.height = size+"px"
	document.getElementById("man").style.top = y+"px"
	document.getElementById("man").style.left = x+"px"
	document.getElementById("man").className = "interactable"
}

var girlfriend = function(size, y, x){
	document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", "girlfriend")
	document.getElementById("girlfriend").setAttribute("src", "sprite-girlfriend.png")
	document.getElementById("girlfriend").style.height = size+"px"
	document.getElementById("girlfriend").style.top = y+"px"
	document.getElementById("girlfriend").style.left = x+"px"
	document.getElementById("girlfriend").className = "interactable"
}

var vampiregirl = function(size, y, x){
	document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", "vampiregirl")
	document.getElementById("vampiregirl").setAttribute("src", "sprite-vampiregirl.png")
	document.getElementById("vampiregirl").style.height = size+"px"
	document.getElementById("vampiregirl").style.top = y+"px"
	document.getElementById("vampiregirl").style.left = x+"px"
	document.getElementById("vampiregirl").className = "interactable"
}


//Single-use objects
var shovel = function(){
	if(inventory[0][1] == 0){
		document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", "shovel")
		document.getElementById("shovel").setAttribute("src", "sprite-shovel.png")
		document.getElementById("shovel").style.height = "100px"
		document.getElementById("shovel").style.top = "505px"
		document.getElementById("shovel").style.left = "500px"
		document.getElementById("shovel").className = "interactable"
		document.getElementById("shovel").setAttribute("onclick", "textbox('shovelPickupText', shovelPickupText1); addToInventory('shovel')")
	}
}

//Objects that change state depending on items in inventory
var shovelTarget = function(){
	if(inventory[0][1] != 2){ //inventory[0] = [shovel, 0-2 (0 = do not have, 1 = have, 2 = not have any more)]
		document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", "shoveltarget")
		document.getElementById("shoveltarget").setAttribute("src", "sprite-shoveltarget.png")
		document.getElementById("shoveltarget").style.height = "100px"
		document.getElementById("shoveltarget").style.top = "505px"
		document.getElementById("shoveltarget").style.left = "120px"
		document.getElementById("shoveltarget").className = "interactable"
		document.getElementById("shoveltarget").setAttribute("onclick", "textbox('noShovelText', noShovelText1)")		
	}
	if(inventory[0][1] == 2){
		document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", "arrowupforward")
		document.getElementById("arrowupforward").setAttribute("src", "sprite-blank.png")
		document.getElementById("arrowupforward").style.height = "100px"
		document.getElementById("arrowupforward").style.top = "505px"
		document.getElementById("arrowupforward").style.left = "120px"
		document.getElementById("arrowupforward").className = "arrowupforward interactable"
		document.getElementById("arrowupforward").setAttribute("onclick", "screentransition('forestHut','corner')")
	}
}