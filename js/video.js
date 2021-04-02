var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	console.log("Starting")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume*100 + "%"
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 document.querySelector("#slider").addEventListener("change", function() {
	 console.log(this);
	 console.log(this.value);
	 let vol= document.querySelector("#volume").innerHTML = this.value + "%";;
	 video.volume = this.value / 100;


 });

 document.querySelector("#slower").addEventListener("click", function() {
	 video.playbackRate = 0.95 * video.playbackRate;
	 console.log("New speed is " + video.playbackRate);	 

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.05 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);	 

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	video.currentTime = video.currentTime + 15;
	console.log("New location " + video.currentTime);	 
	if (video.currentTime >= video.duration) {
		video.currentTime = 0; 

	};

});

document.querySelector("#mute").addEventListener("click", function(){
	if (document.querySelector("#mute").innerHTML == "Mute"){
		video.muted = true; 
		document.querySelector("#mute").innerHTML = "Unmute";


	} else {
		video.muted = false; 
		document.querySelector("#mute").innerHTML = "Mute";

	}





});



document.querySelector("#vintage").addEventListener("click", function() {
	video.className = 'oldSchool';


});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = 'video';


});