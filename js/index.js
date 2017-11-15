var email;
var user;
window.onload = function(){
    email = localStorage.getItem('currentUser');
    user = JSON.parse(localStorage.getItem(email));
    if (user.knee == "true") document.getElementByClassName('squats').innerHTML = '';
    if (user.back == "true") document.getElementByClassName('yoga').innerHTML = '';
}