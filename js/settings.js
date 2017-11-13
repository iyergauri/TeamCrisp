//checking boxes in account settings
var email = localStorage.getItem('currentUser');

var user = JSON.parse(localStorage.getItem(email));

//hardcoded, add more if we add more possible modifications
if(user.knee == "true") document.getElementById("knee").checked=true;
if(user.back == "true") document.getElementById("back").checked=true;
if(user.wrist == "true") document.getElementById("wrist").checked=true;