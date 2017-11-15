var email;
var user;
window.onload = function(){
    email = localStorage.getItem('currentUser');
    user = JSON.parse(localStorage.getItem(email));
    if (user.wrist == "true") {
        exers = document.getElementsByClassName( 'wrist' );
        [].slice.call( exers ).forEach(function ( exer ) {
            exer.innerHTML = 'Sit Ups';
        });
    }
    if (user.knee == "true") {
        exers = document.getElementsByClassName( 'knee' );
        [].slice.call( exers ).forEach(function ( exer ) {
            exer.innerHTML = 'Calf Raise';
        });
    }
    if (user.back == "true") {
        exers = document.getElementsByClassName( 'back' );
        [].slice.call( exers ).forEach(function ( exer ) {
            exer.innerHTML = 'Wall Sit';
        });
    }

}