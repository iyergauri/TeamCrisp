	
var email = localStorage.getItem('currentUser');
var user = JSON.parse(localStorage.getItem(email));

if(user.knee == "true"){
	document.getElementById("exercise-name2").innerHTML="TOE RAISE";
	document.getElementById("exercise-amt2").innerHTML="10 TOE RAISES";
	document.getElementById("exercise-pic2").src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Fidget_spinner_red%2C_cropped.jpg";
}
if(user.back == "true"){
	document.getElementById("exercise-name2").innerHTML="WALL SIT";
	document.getElementById("exercise-amt2").innerHTML="30 Seconds";
	document.getElementById("exercise-pic2").src="https://img1.banggood.com/thumb/view/oaupload/banggood/images/E5/29/04cba5f2-b892-49ef-ba65-ba9732799d17.jpg";
}
if(user.wrist == "true"){	
	document.getElementById("exercise-name3").innerHTML="SIT UPS";
	document.getElementById("exercise-amt3").innerHTML="10 SIT UPS";
	document.getElementById("exercise-pic3").src="https://lh3.googleusercontent.com/g07ajktYITMolLe6gwM_yy1ODZG8ylq4ekhXYfOZtPwczLbT1pZ3F2SLzatnTzfllDI=w300";
}