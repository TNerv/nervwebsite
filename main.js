function overlay(){
    var btn = document.getElementById("overlay-start");
	var btnwrap = document.getElementById("btnwrap");
    var wrapper = document.getElementById("wrapper");
    btn.style.opacity = 0;
	btnwrap.style.visibility = "hidden";
    wrapper.style.visibility = "visible";
    mediaPlay();
}

function mediaPlay() {
    var video = document.getElementById("bgvid");
    video.play()
}