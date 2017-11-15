var email;
var user;
window.onload = function(){
    email = localStorage.getItem('currentUser');
    user = JSON.parse(localStorage.getItem(email));
    calendar = document.getElementById('calendar');
    if (user.wrist == "true") {
        calendar.rows[1].cells[0].innerHTML = 'No Workout Today!';
        calendar.rows[1].cells[2].innerHTML = 'No Workout Today!';
        if(user.back == "true") {
            calendar.rows[1].cells[4].innerHTML = 'No Workout Today!';
        } else {
            calendar.rows[1].cells[4].innerHTML = 'Squats';
            calendar.rows[2].cells[4].innerHTML = '';
        }

    }
    if (user.back == "true") {
        calendar.rows[2].cells[1].innerHTML = '';
        calendar.rows[2].cells[4].innerHTML = '';
    }

}