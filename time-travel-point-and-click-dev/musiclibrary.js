function playMusic(source){

		document.getElementById("music").src= source
		document.getElementById("music").type="audio/mp3"
		document.getElementById("musicplayer").load()
		document.getElementById("musicplayer").play()

}

//Da music

var music = {}
	music.maintheme = "music-Ambient Evening - BlazingDragon.mp3"
	music.danger = "music-Death - Evil-Dog.mp3"
	music.vampiretheme = "music-03-Narbacular Down.mp3"
	music.mystery = "music-Metroid_Prime_Solitude_OC_ReMix.mp3"