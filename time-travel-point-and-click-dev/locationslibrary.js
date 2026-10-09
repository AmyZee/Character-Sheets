
//Locations
	//Legend
		//background("=same as function name")
		//arrowleft/arrowright("to which location", "from which location", top, left)
		//man(height, top, left)

function blank(){
	background("blank")
}

function start(){
	background("start")
	arrowright("corner", "start", 450, 920)
//	interactableObjects("arrowright", screentransition, "corner", "start", 300, 100, 450, 920)
	man(200, 500, 50)
}

function corner(){
	background("corner")
	arrowleft("start", "corner", 450, 10)
	arrowright("forest", "corner", 450, 920)
	man(200, 500, 300)
}

function forest(){
	background("forest")
	arrowleft("corner", "forest", 450, 10)
	man(200, 500, 200)
}

function forestHut(){
	background("forestHut")
	vampiregirl(200, 500, 600)
}

//Inside
function hallwayPrincipalOffice(){
	background("hallwayPrincipalOffice")
	arrowright("hallwaySwimmingPool", "hallwayPrincipalOffice", 450, 920)
	man(200, 500, 200)
}

function hallwaySwimmingPool(){
	if(currentChapter == "chapter1" && switchPanicAtGirlFriendGameOver == false){
		background("hallwaySwimmingPoolGirlfriend")		
	} else {
		background("hallwaySwimmingPool")
		if(currentChapter == "chapter1"){
			vampiregirl(200, 500, 400)
		}
	}
	arrowleft("hallwayPrincipalOffice", "hallwaySwimmingPool", 450, 10)
	arrowupright("swimmingPoolPortal", "hallwaySwimmingPool", 450, 520)
	man(200, 500, 200)
}

function swimmingPoolPortal(){
	background("swimmingPoolPortal")
	arrowdownleft("hallwaySwimmingPool", "swimmingPoolPortal", 560, 10)
	// girlfriend(200, 300, 760)
}


//Recurring location functions
function background(name){
	document.getElementById("game").appendChild(document.createElement("img")).setAttribute("id", name)
	document.getElementById(name).setAttribute("src", "bg-"+name+".png")
	document.getElementById("game").style.backgroundRepeat = "no-repeat"
	document.getElementById("game").setAttribute("draggable", "false")
}


