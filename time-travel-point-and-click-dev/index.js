//On document load functions

function prepareAudioPlayer(){
	document.getElementById("musicplayer").appendChild(document.createElement("source")).setAttribute("id", "music")
	document.getElementById("soundplayer").appendChild(document.createElement("source")).setAttribute("id", "sound")
}
prepareAudioPlayer() //Only on document load needed. Will nag about it not having any src, but that's fine. We're going to load one later in musiclibary.js.

textbox("play", play1) //INTRO

var inventory = [["Shovel", 0]] //Prepare inventory for future items
var currentChapter = "chapter1" //For reference in chapter differences




//Screen change

function screentransition(location, fromlocation){
	//fromlocation is useful for knowing what animations to play to introduce this screen.


	//Wipe all assets
	function wipescreen(){
		document.getElementById("game").innerHTML = ""
	}
	wipescreen()

	//Draw new assets from locationslibrary.js and objectslibrary.js
	if(location == "corner"){
		corner()
		document.getElementById("man").setAttribute("onclick", "textbox('continuationText', continuationText1)")
		shovelTarget()

	}

	if(location == "start"){
	
		start()
		document.getElementById("man").setAttribute("onclick", "textbox('intro', intro1, intro2)")
	}

	if(location == "forest"){

		forest()
		document.getElementById("man").setAttribute("onclick", "textbox('continuationText', continuationText1)")		
		shovel()

	}

	if(location == "forestHut"){

		forestHut()
		if(switchPanicAtGirlFriendGameOver == false){
			textbox('vampiregirlIntro', vampiregirlIntro1)
		} else {
			man(200, 500, 300)
			textbox('chapter1End', chapter1End1, chapter1End2, chapter1End3, chapter1End4, chapter1End5, chapter1End6, chapter1End7, chapter1End8, chapter1End9)
		}
		
	}

	if(location == "hallwayPrincipalOffice"){

		hallwayPrincipalOffice()

	}

	if(location == "hallwaySwimmingPool"){

		hallwaySwimmingPool()
		document.getElementById("arrowupright").setAttribute("onclick", `textbox('panicAtGirlFriendGameOverPart1', panicAtGirlFriendGameOver1, panicAtGirlFriendGameOver2, panicAtGirlFriendGameOver3)
			playMusic(music.danger)`
			/*addEventListener("click") adds to the default screentransition event at locationslibrary.js, rather than replacing it.
			While removing and adding events is possible constantly, it is prone to bugs due to being able to forget events being fired at another .js file.
			Replacing the setAttribute("onclick") directly is less prone to errors, even if it's a bit more messy in entering multiple events (textbox, music) without newlining between multiple code statements.*/
		)
		if(switchPanicAtGirlFriendGameOver == true){
			textbox('panicAtGirlFriendGameOverPart2', panicAtGirlFriendGameOver4, panicAtGirlFriendGameOver5, panicAtGirlFriendGameOver6, panicAtGirlFriendGameOver7)
		}

	}

	if(location == "swimmingPoolPortal"){

		swimmingPoolPortal()
	//	document.getElementById("girlfriend").setAttribute("onclick", "textbox('girlfriendFound', girlfriendFound1, girlfriendFound2, girlfriendFound3, girlfriendFound4)")

	}


	

	cursorsToDefault()

	prepareInteractableVisibility()
}


function atDialogEnd(text){ //Auto-triggers at every end of dialog, so the screen can transition to the correct new screen.




	if (text == "play"){
		textbox("introtext", introtext1, introtext2, introtext3, introtext4, introtext5)
		playMusic(music.maintheme)
	}
	if (text == "introtext"){
		screentransition("start", undefined)
	}
	if (text == "shovelTargetEnd"){
		screentransition("corner", "corner") //Refreshes screen with objects added/removed after dialogEnd
	}
	if (text == "vampiregirlIntro"){
		screentransition("hallwayPrincipalOffice", "forestHut")
	}
	if (text == "panicAtGirlFriendGameOverPart1"){
		switchPanicAtGirlFriendGameOver = true //Sets part 2 of dialog in motion after screentransition
		screentransition("hallwaySwimmingPool", "hallwaySwimmingPool")
	}
	if (text == "panicAtGirlFriendGameOverPart2"){
		screentransition("forestHut", "hallwaySwimmingPool")
	}
	if (text == "chapter1End"){
		screentransition("blank", "forestHut")
		alert("End of Chapter 1.")
	}

}

function addToInventory(item){
	document.getElementById("game").removeChild(document.getElementById(item))



	if(item == 'shovel'){
		inventory[0][1] = 1
	}



	document.getElementById("inventory").appendChild(document.createElement("img")).setAttribute("id", item)
	document.getElementById(item).setAttribute("src", "inventory-"+item+".png")
	document.getElementById(item).style.float = "left"
	document.getElementById(item).addEventListener("click", dragStart, false)
}

var dragging = "" //Used in dragStart() and dragEnd()

//From Inventory to game area
function dragStart(item){
	var cursorStyle = "move"
	document.getElementById(item.target.id).style.opacity = "0.5"
	console.log(item.target.id)




	//Pick cursor icon
	if(item.target.id == "shovel"){
		cursorStyle = "url(cursor-shovel.png) 25 30, auto"
	}





	document.getElementById("game").style.cursor = cursorStyle
	dragging = item.target.id
	console.log(dragging)
	for(var i = 0; i < document.getElementsByClassName("interactable").length; i++){
		document.getElementsByClassName("interactable")[i].style.cursor = cursorStyle
	}
	document.getElementById("game").addEventListener("mousedown", dragEnd, false)
}

function dragEnd(itemDropElement){
	document.getElementById("game").removeEventListener("mousedown", dragEnd)




	//What happens when key reaches keyhole?
		//1. Change inventory[item_index][1] to 2
		//2. Remove item from physical inventory
		//3. Remove previous itemtarget's onclick events to negate overlapping text
		//4. Show relevant dialog in textbox()
	if(dragging == "shovel" && itemDropElement.target.id == "shoveltarget"){
		inventory[0][1] = 2
		document.getElementById("inventory").removeChild(document.getElementById("shovel"))
		document.getElementById("shoveltarget").setAttribute("onclick", "")
		textbox("shovelTargetEnd", shovelTextEnd1)

		//atDialogEnd() auto-activates from textbox() with "shoveltext" as parameter (textbox.js, line 156)
		//It is used to refresh the current location or auto-load another location after dialog
		
	} else if(dragging == "key2" && itemDropElement.target.id == "keyhole2"){

		
	}
	else {
		document.getElementById(dragging).style.opacity = "1"
		if (itemDropElement.target.classList.contains("interactable")){
			console.log("Negative dialog!")
			
		}
	}





	cursorsToDefault()
}