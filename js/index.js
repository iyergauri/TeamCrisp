var email;
var user;
window.onload = function(){
    email = localStorage.getItem('currentUser');
    user = JSON.parse(localStorage.getItem(email));
    calendar = document.getElementById('calendar');
    if (user.knee == "true") {
        calendar.rows[1].cells[2].innerHTML = '';
        calendar.rows[1].cells[4].innerHTML = '';
    }
    if (user.back == "true") {
        calendar.rows[2].cells[1].innerHTML = '';
        calendar.rows[2].cells[4].innerHTML = '';
    }
}