	
var email = localStorage.getItem('currentUser');
var user = JSON.parse(localStorage.getItem(email));

window.onload = function(){
	if(user.knee == "true"){
		document.getElementById("exercise-done1").innerHTML="Toe Raise";
		
	}
	if(user.back == "true"){
		document.getElementById("exercise-done2").innerHTML="Wall Sit";
	}
	if(user.wrist == "true"){	
		document.getElementById("exercise-done3").innerHTML="Sit Ups";
	}
};