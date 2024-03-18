// JavaScript Document
var view = document.getElementById("view");
var sound = document.getElementById("sound");
var click = false;
var soundOn = false;

document.body.removeChild(sound);
document.body.removeChild(view);

document.getElementById("settings").onclick = function(){
	if(click == false){
		click = true;
		document.body.appendChild(sound);
		document.body.appendChild(view);
	} else {
		click = false;
		document.body.removeChild(sound);
		document.body.removeChild(view);
	}
}

sound.onclick = function(){
	if(soundOn == false){
	sound.innerHTML = "Sound: on"
	}
}