var email = localStorage.getItem('currentUser');
var user = JSON.parse(localStorage.getItem(email));
var date = new Date();
var day = date.getDay();

window.onload = function(){
$("#exercise-info1-mod").hide();
$("#exercise-info2-mod").hide();
$("#exercise-info3-mod").hide();
	if(user.knee == "true"){
		document.getElementById("exercise-name1").innerHTML="Calf Raise";
		document.getElementById("exercise-amt1").innerHTML="10 Times";
		document.getElementById("exercise-img1").src="./img/calfraise.jpg";
		document.getElementById("walk").id="calf-raise-btn";
		document.getElementById("calf-raise-btn").onclick="counter(this)";
    $("#exercise-info1").hide();
    $("#exercise-info1-mod").show();

	} 
	if(user.back == "true"){
		document.getElementById("exercise-name2").innerHTML="Wall Sit";
		document.getElementById("exercise-amt2").innerHTML="30 Seconds";
		document.getElementById("exercise-img2").src="./img/wallsit.jpg";
		document.getElementById("squat").id="wall-sit-btn";
		document.getElementById("wall-sit-btn").onclick="timer(this, 30)";
    $("#exercise-info2").hide();
    $("#exercise-info2-mod").show();
	}
	if(user.wrist == "true"){	
		document.getElementById("exercise-name3").innerHTML="Sit Ups";
		document.getElementById("exercise-amt3").innerHTML="10 Times";
		document.getElementById("exercise-img3").src="./img/situp.png";
    $("#exercise-info3").hide();
    $("#exercise-info3-mod").show();
	}
	
	
	/**
	if(day % 2 == 0){
		document.getElementById("exer1").style.visibility="hidden";
		document.getElementById("exer2").style.visibility="hidden";
	}
	if(day % 2 == 1 || day == 6){
		document.getElementById("exer3").style.visibility="hidden";
	}
	*/
};

function timer(obj,time) {
    $(obj).attr("disabled", true);
    var timeleft = time;
    var minutes = Math.floor(timeleft/60);
    var seconds = timeleft - minutes*60;
    obj.innerHTML = minutes + ":" + seconds + " left";
    var downloadTimer = setInterval(function(){
    timeleft--;
    minutes = Math.floor(timeleft/60);
    seconds = timeleft - minutes*60;
    if(seconds < 10)
      seconds = "0"+seconds;
    obj.textContent = minutes + ":" + seconds + " left";
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      obj.textContent = "DONE!";
    }
    },1000);
}
function counter(obj) {
    $(obj).attr("disabled", true);
    obj.innerHTML = "10 left";
    var timeleft = 10;
    var imgNum = 0;
    var downloadTimer = setInterval(function(){
      timeleft--;
      obj.textContent = timeleft + " left";

      if(timeleft <= 0){
        clearInterval(downloadTimer);
        obj.textContent = "DONE!";
      }
    },2000);

if(this.id == "squat"){

    var switchImg = setInterval(function(){
      if(timeleft <= 0)
        document.getElementById("exercise-img2").src = "./img/Squat1.png";
      else if(imgNum % 2 == 0)
        document.getElementById("exercise-img2").src = "./img/Squat1.png";
      else 
        document.getElementById("exercise-img2").src = "./img/Squat2.png";
      
      imgNum++;
    },1000);
  }

}
