//Options
var showInteractables = false
var typewriterEffect = true
var toggleMusic = true
var toggleSound = true //No code behind this one yet

function prepareInteractableVisibility(){

	if (showInteractables == true){

		for(var i = 0; i < document.getElementsByClassName("interactable").length; i++){
			if(document.getElementsByClassName("interactable")[i].classList.contains("arrowleft") == true ||
				document.getElementsByClassName("interactable")[i].classList.contains("arrowright") == true ||
				document.getElementsByClassName("interactable")[i].classList.contains("arrowupleft") == true ||
				document.getElementsByClassName("interactable")[i].classList.contains("arrowupright") == true ||
				document.getElementsByClassName("interactable")[i].classList.contains("arrowdownleft") == true ||
				document.getElementsByClassName("interactable")[i].classList.contains("arrowdownright") == true ||
				document.getElementsByClassName("interactable")[i].classList.contains("arrowupforward") == true
				){
				document.getElementsByClassName("interactable")[i].style.background = "rgba(255,192,203,0.9)" //"pink"
			}
			else {
				document.getElementsByClassName("interactable")[i].style.background = "rgba(255,0,0,0.9)" //"red"
			}
		}

	} else {

		for(var i = 0; i < document.getElementsByClassName("interactable").length; i++){
			document.getElementsByClassName("interactable")[i].style.background = "none"
		}


	}

}

document.getElementById("showinteractables").addEventListener("click", function(){

	if (showInteractables == false){
		showInteractables = true
		document.getElementById("showinteractables").src = "options-showinteractables.png"
	} else {
		showInteractables = false
		document.getElementById("showinteractables").src = "options-noshowinteractables.png"
	}

	prepareInteractableVisibility()

})

document.getElementById("dialogskipbutton").addEventListener("click", function(){
	if (typewriterEffect == true){
		typewriterEffect = false
		document.getElementById("dialogskipbutton").src = "options-nodialogskip.png"
	} else {
		typewriterEffect = true
		document.getElementById("dialogskipbutton").src = "options-dialogskip.png"
	}
})
document.getElementById("soundbutton").addEventListener("click", function(){
	if (toggleSound == true){
		toggleSound = false
		document.getElementById("soundplayer").volume = 0
		document.getElementById("soundbutton").src = "options-nosound.png"
	} else {
		document.getElementById("soundplayer").volume = 1
		document.getElementById("soundbutton").src = "options-sound.png"
		toggleSound = true
	}
})
document.getElementById("musicbutton").addEventListener("click", function(){
	if (toggleMusic == true){
		toggleMusic = false
		document.getElementById("musicplayer").volume = 0
		document.getElementById("musicbutton").src = "options-nomusic.png"
	} else {
		document.getElementById("musicplayer").volume = 1
		document.getElementById("musicbutton").src = "options-music.png"
		toggleMusic = true
	}
})