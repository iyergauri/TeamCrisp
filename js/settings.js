//checking boxes in account settings
var email;
var user;
window.onload = function(){
email = localStorage.getItem('currentUser');
user = JSON.parse(localStorage.getItem(email));
//hardcoded, add more if we add more possible modifications
if(user.knee == "true") document.getElementById("knee").checked=true;
if(user.back == "true") document.getElementById("back").checked=true;
if(user.wrist == "true") document.getElementById("wrist").checked=true;
knee.onclick = editModification;
back.onclick = editModification;
wrist.onclick = editModification;
document.getElementById("greeting").innerHTML = "Hello " + user.name + "!";
document.getElementById("info-age").innerHTML =  "<strong>Age:</strong> " + user.age + " Years";
document.getElementById("info-email").innerHTML = "<strong>Email:</strong> " + email;
};


function editModification(){
	if(localStorage.getItem(email) == null)
		return;

	var name = user.name;
	var password = user.password;
	var age = user.age;
	var knee = document.getElementById("knee").checked.toString();
	var back = document.getElementById("back").checked.toString();
	var wrist = document.getElementById("wrist").checked.toString();

	var jsonObj = JSON.stringify({'password': password, "name": name, "age":age, 'knee': knee, 'back':  back,'wrist':wrist});
	localStorage.setItem(email, jsonObj);
}
