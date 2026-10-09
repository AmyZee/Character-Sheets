function textbox(){
	
	//Call by textbox(arg1, arg2, arg3, arg4, ...) to display those in the text box
	//Needs textbox, textboxtext, textboxnextbutton, textboxprevbutton div's (display:none) in the DOM to work.
		//<div id="textbox">
		//	<div id="textboxtext"></div>
		//	<div id="textboxprevbutton">^</div>
		//	<div id="textboxnextbutton">&gt;</div>
		//</div>


	//CUSTOMIIZABLE COLORS
	//Textbox background current text
	var currentbackground = "#539335"
	var currentbackgroundMan = "#213C7A"
	var currentbackgroundGirlfriend = "#E9B354"
	var currentbackgroundVampiregirl = "#A80500"
	//Textbox background past text
	var pastbackground = "#5f9545"
	//Textbox text color current text
	var currentcolor = "white"
	//Textbox text color past text
	var pastcolor = "lightgrey"




	var timeoutDuration = 16 //Set text speed. Minimum 16 as 16.667 ms is 60 fps.
	// var timeoutPeriod = 1 //Wait this amount of times as long after a period and a space. So not a period and a \n
	// var timeoutComma = 1 //Wait this amount of times as long after a comma.
	var timeoutZeroWidthSpace = 20 // Wait this amount of times as long after a zero-width space. (\u200b)

	//CODE START

	var output = ""

	document.getElementById("textbox").style.display = "block"
	// document.getElementById("textboxnextbutton").style.display = "block"

	var arg = arguments
	var currentdialog = 0
	// var dialog = arguments[currentdialog]
	var dialoglimit = 0
	
	var index = 0


	var originalTimeoutDuration = timeoutDuration
	function textboxEffect(dialog){

		if(typewriterEffect == true){

			setTimeout(function(){

				if(index-4 > -1){ //if statement makes the first two undefinedundefined not show up
					output += dialog[1][index-4] //show all the letters except for the last two as white letters
				}

				//Draw letters. Make the last two ones a bit transparent to get a fade-in effect.
				//The undefined part of the if statements makes it so the first two frames don't show 'undefinedundefined' and 'undefined[+first letter of dialog]'
				if(index < dialog[1].length && dialog[1][index-3] != undefined && dialog[1][index-2] != undefined && dialog[1][index-1] != undefined){

					document.getElementById("textboxtext").innerHTML = output + "<span style='opacity: 0.8; font-size: 0.9em'>"+dialog[1][index-3]+dialog[1][index-2]+"</span><span style='opacity: 0.5; font-size: 0.8em'>" +dialog[1][index-1]+ dialog[1][index]+"</span>"

				} else {

					if (index-1 < dialog[1].length && dialog[1][index-3] != undefined && dialog[1][index-2] != undefined && dialog[1][index-1] != undefined) {
					
					document.getElementById("textboxtext").innerHTML = output + "<span style='opacity: 0.8; font-size: 0.9em'>"+dialog[1][index-3]+dialog[1][index-2]+"</span><span style='opacity: 0.5; font-size: 0.8em'>" +dialog[1][index-1]+"</span>"

					} else if (index-2 < dialog[1].length && dialog[1][index-3] != undefined && dialog[1][index-2] != undefined) {

						document.getElementById("textboxtext").innerHTML = output + "<span style='opacity: 0.8; font-size: 0.9em'>"+dialog[1][index-3]+dialog[1][index-2]+"</span>"

					} else if (index-3 < dialog[1].length && dialog[1][index-3] != undefined) {

						document.getElementById("textboxtext").innerHTML = output + "<span style='opacity: 0.8; font-size: 0.9em'>"+dialog[1][index-3]+"</span>"

					} else if (index-4 < dialog[1].length) {

						document.getElementById("textboxtext").innerHTML = output

					}

				} 

				//Get ready for next character
				index++			
				
				//Typewriter effect
				if(index < dialog[1].length+4){

					//Reset timeoutDuration to default value
					timeoutDuration = originalTimeoutDuration		

					//Layout & Timing
					if(dialog[1].substring(index, index+6) == "{wait}"){
						let dialogtemp = dialog[1].substring(0, index)+"\u200b"+"\u200b"+"\u200b"+"\u200b"+dialog[1].substring(index+6)
						dialog[1] = dialogtemp

					} else if(dialog[1].substring(index, index+7) == "{wait.}"){
						let dialogtemp = dialog[1].substring(0, index)+"\u200b"+"\u200b"+"\u200b"+"\u200b"+"\u200b"+dialog[1].substring(index+7)
						dialog[1] = dialogtemp
					}
					//Works for both {wait} and {wait.}
					if (dialog[1][index-4] == "\u200b" && dialog[1][index-3] == "\u200b" && dialog[1][index-2] == "\u200b" && dialog[1][index-1] == "\u200b"){
						timeoutDuration = timeoutDuration * timeoutZeroWidthSpace
					}

					//Typewriter recursion
					textboxEffect(dialog)
				}

				//End state
				if(index == dialog[1].length){
					textboxbuttonActivate()
					textboxPrevButtonActivate()
				}

			}, timeoutDuration)

		} else { //No typewriter effect, but all text appears instantly

			document.getElementById("textboxtext").innerHTML = dialog[1]
			textboxbuttonActivate()
			textboxPrevButtonActivate()


		}

	}
	//textboxEffect(dialog)

	function textboxbuttonActivate(){
		document.getElementById("textboxnextbutton").style.display = "block"
		document.getElementById("textboxnextbutton").addEventListener("click", textboxPrepareNextDialog, false)
	}
	function textboxPrevButtonActivate(){
		document.getElementById("textboxprevbutton").addEventListener("click", textboxPreparePrevDialog, false)
	}

	function textboxPrepareNextDialog(){

		function clearDialogBox(){
			index = 0
			output = ""
			document.getElementById("textboxtext").innerHTML = ""
			document.getElementById("textboxnextbutton").removeEventListener("click", textboxPrepareNextDialog, false)
			document.getElementById("textboxprevbutton").removeEventListener("click", textboxPreparePrevDialog, false)
		}
		clearDialogBox()

		currentdialog++
		var nextdialog = currentdialog + 1

		if(currentdialog > dialoglimit){
			dialoglimit++	
		}
		if(currentdialog == dialoglimit){
			document.getElementById("textboxtext").style.color = currentcolor
			// document.getElementById("textbox").style.background = currentbackground
		}

		textboxDialog(currentdialog, nextdialog)
	}

	function textboxPreparePrevDialog(){
		function clearDialogBox(){
			index = 0
			output = ""
			document.getElementById("textboxtext").innerHTML = ""
			document.getElementById("textboxnextbutton").removeEventListener("click", textboxPrepareNextDialog, false)
			document.getElementById("textboxprevbutton").removeEventListener("click", textboxPreparePrevDialog, false)
		}
		clearDialogBox()


		currentdialog--
		var nextdialog = currentdialog - 1
		document.getElementById("textboxtext").style.color = pastcolor
		// document.getElementById("textbox").style.background = pastbackground

		textboxDialog(currentdialog, nextdialog)
	}

	function textboxDialog(currentdialog, nextdialog){

		// console.log("arg["+currentdialog+"]: "+arg[currentdialog])
		// console.log("arg["+nextdialog	+"]: "+arg[nextdialog])
		if(arg[currentdialog] != undefined){

			//Make last dialog button red and • rather than orange and > to visualise that pressing it will close it rather than continue the text.
			//Nextdialog can be a lower number than currentdialog if the prev-button is pressed.
			if (arg[nextdialog] == undefined && nextdialog > -1){
				//Last dialog of a set
				document.getElementById("textboxprevbutton").style.display = "block"
				document.getElementById("textboxnextbutton").style.background = "red"
				document.getElementById("textboxnextbutton").innerHTML = "•"
			}
			if (arg[nextdialog] != undefined || nextdialog < 0) {
				//Middle dialog of a set
				document.getElementById("textboxprevbutton").style.display = "block"
				document.getElementById("textboxnextbutton").style.background = "orange"
				document.getElementById("textboxnextbutton").innerHTML = ">"
			}
			if (currentdialog == 1){
				//First dialog of a set
				document.getElementById("textboxprevbutton").style.display = "none"
			}

			dialog = arg[currentdialog]

			//Draw background of textbox, depending on character
			if(dialog[0] == "man" || dialog[0] == "man-yell"){
				document.getElementById("textbox").style.background = currentbackgroundMan
			} else if (dialog[0] == "girlfriend" || dialog[0] == "girlfriend-charmed"){
				document.getElementById("textbox").style.background = currentbackgroundGirlfriend
			} else if (dialog[0] == "vampiregirl"){
				document.getElementById("textbox").style.background = currentbackgroundVampiregirl
			} else {
				document.getElementById("textbox").style.background = currentbackground
			}

			//Draw portrait above textbox, size and position defined in CSS style sheet @ index.html
			if(document.getElementById("portrait").firstChild){
				document.getElementById("portrait").removeChild(document.getElementById("portrait").firstChild)
			}
			document.getElementById("portrait").appendChild(document.createElement("img")).setAttribute("id", "char-"+dialog[0])
			document.getElementById("char-"+dialog[0]).setAttribute("src", "char-"+dialog[0]+".png")

			if(currentdialog == dialoglimit){
				textboxEffect(dialog)
			} else {
				document.getElementById("textboxtext").innerHTML = dialog[1]
				textboxbuttonActivate()
				textboxPrevButtonActivate()
			}
			

		} else {
			document.getElementById("textboxnextbutton").style.display = "none"
			document.getElementById("textboxprevbutton").style.display = "none"
			document.getElementById("textboxnextbutton").style.background = "orange"
			document.getElementById("textboxnextbutton").innerHTML = ">"
			document.getElementById("textbox").style.display = "none"
			atDialogEnd(arg[0])
		}		
	}
	textboxPrepareNextDialog(arguments) 
}