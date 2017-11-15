	
var email = localStorage.getItem('currentUser');
var user = JSON.parse(localStorage.getItem(email));
var date = new Date();
var day = date.getDay();

window.onload = function(){
	if(user.knee == "true"){
		document.getElementById("exercise-name1").innerHTML="Calf Raise";
		document.getElementById("exercise-amt1").innerHTML="10 Times";
		document.getElementById("exercise-img1").src="./img/calfraise.jpg";
	}
	if(user.back == "true"){
		document.getElementById("exercise-name2").innerHTML="Wall Sit";
		document.getElementById("exercise-amt2").innerHTML="30 Seconds";
		document.getElementById("exercise-img2").src="./img/wallsit.jpg";
		document.getElementById("squat").id="wallsit-btn";
	}
	if(user.wrist == "true"){	
		document.getElementById("exercise-name3").innerHTML="Sit Ups";
		document.getElementById("exercise-amt3").innerHTML="10 Times";
		document.getElementById("exercise-img3").src="./img/situp.png";
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
