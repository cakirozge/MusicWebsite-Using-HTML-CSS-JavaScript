var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){ //eğer şarkı duraklatılırsa o zaman onu çaldıracak kodu ekliyoruz.
        mySong.play();
        icon.src = "images/pause.png";
    }else{
        mySong.pause();
        icon.src = "images/play.png";
    }
}