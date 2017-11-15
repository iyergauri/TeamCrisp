	
var email = localStorage.getItem('currentUser');
var user = JSON.parse(localStorage.getItem(email));

window.onload = function(){
	if(user.knee == "true"){
		document.getElementById("exercise-name1").innerHTML="Calf Raise";
		document.getElementById("exercise-amt1").innerHTML="10 Times";
		document.getElementById("exercise-img1").src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Fidget_spinner_red%2C_cropped.jpg";
	}
	if(user.back == "true"){
		document.getElementById("exercise-name2").innerHTML="Wall Sit";
		document.getElementById("exercise-amt2").innerHTML="30 Seconds";
		document.getElementById("exercise-img2").src="https://img1.banggood.com/thumb/view/oaupload/banggood/images/E5/29/04cba5f2-b892-49ef-ba65-ba9732799d17.jpg";
	}
	if(user.wrist == "true"){	
		document.getElementById("exercise-name3").innerHTML="Sit Ups";
		document.getElementById("exercise-amt3").innerHTML="10 Times";
		document.getElementById("exercise-img3").src="https://lh3.googleusercontent.com/g07ajktYITMolLe6gwM_yy1ODZG8ylq4ekhXYfOZtPwczLbT1pZ3F2SLzatnTzfllDI=w300";
	}
};