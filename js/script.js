
//insecure but using just for fake info and testing
//account 1
var userData = {'password': 'pass', 'injuries':['knee']};
var curremail = "test@example.com";
localStorage.setItem(curremail, JSON.stringify(userData));

//account 2
var userData = {'password': 'word', 'injuries':['back']};
var curremail = "back@injury.com";
localStorage.setItem(curremail, JSON.stringify(userData));


$('#exerciseInfoModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var exercise = button.data('exercise') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
 
  modal.find('.modal-title').text(exercise);
  if(exercise == "Squat"){
  modal.find('#modal-text').text("Stand with your arms straight out and with your feet at about shoulder width apart. "+
                    "Keeping your back straight, bend your knees as if you were sitting. " +
                    "Rise back up to a standing position. " +
                    "Repeat this 10 times.");
  }
  if(exercise == "Walk"){
    modal.find('#modal-text').text("Walk at a brisk pace in an open area for 10 minutes");
  }
})

function timer() {
    $("#walk").attr("disabled", true);
    document.getElementById("timeCount").innerHTML = "10:00 left";
    var timeleft = 600;
    var minutes = Math.floor(timeleft/60);
    var seconds = timeleft - minutes*60;
    var downloadTimer = setInterval(function(){
    timeleft--;
    minutes = Math.floor(timeleft/60);
    seconds = timeleft - minutes*60;
    if(seconds < 10)
      seconds = "0"+seconds;
    document.getElementById("timeCount").textContent = minutes + ":" + seconds + " left";
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("numCount").textContent = "DONE!";
    }
    },1000);
}
function counter() {
    $("#squat").attr("disabled", true);
    document.getElementById("numCount").innerHTML = "10 left";
    var timeleft = 10;
    var imgNum = 0;
    var downloadTimer = setInterval(function(){
      timeleft--;
      document.getElementById("numCount").textContent = timeleft + " left";

      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("numCount").textContent = "DONE!";
      }
    },2000);

    var switchImg = setInterval(function(){
      if(timeleft <= 0)
        document.getElementById("squat-img").src = "./img/Squat1.png";
      else if(imgNum % 2 == 0)
        document.getElementById("squat-img").src = "./img/Squat1.png";
      else 
        document.getElementById("squat-img").src = "./img/Squat2.png";
      
      imgNum++;
    },1000);
}

function checkLogin(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if(localStorage.getItem(email) == null){
  alert("There is no account using this eamil address");
  return;
}
var info = JSON.parse(localStorage.getItem(email));
//FYI this is super insecure but is just being used for functionality
//account 1

  if(info.password == password){
    localStorage.setItem("currentUser", email);
    location="./index.html";
  }

  
  else
    alert("That is the wrong password");


}