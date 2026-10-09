function cursorsToDefault(){
	for(var i = 0; i < document.getElementsByClassName("interactable").length; i++){
		if(document.getElementsByClassName("interactable")[i].classList.contains("arrowupforward")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(arrow-up-forward.png), auto"
		}
		else if(document.getElementsByClassName("interactable")[i].classList.contains("arrowupright")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(arrow-up-right.png), auto"
		}
		else if(document.getElementsByClassName("interactable")[i].classList.contains("arrowupleft")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(arrow-up-left.png), auto"
		}
		else if(document.getElementsByClassName("interactable")[i].classList.contains("arrowleft")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(arrow-left.png), auto"
		}
		else if(document.getElementsByClassName("interactable")[i].classList.contains("arrowright")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(arrow-right.png), auto"
		}
		else if(document.getElementsByClassName("interactable")[i].classList.contains("arrowdownleft")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(arrow-down-left.png), auto"
		}
		else if(document.getElementsByClassName("interactable")[i].classList.contains("arrowdownright")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(arrow-down-right.png), auto"
		}
		else if(document.getElementsByClassName("interactable")[i].classList.contains("interactable")){
			document.getElementsByClassName("interactable")[i].style.cursor = "url(pointer.png), auto"
		}
		
		document.getElementsByClassName("interactable")[i].style.background = ""
	}
	document.getElementById("game").style.cursor = "url(normal.png), auto"
}