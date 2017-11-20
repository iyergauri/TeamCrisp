/** File: script.js
  * Authors: Connor Schultz, Yiming Andy Zhang, Gauri Iyer
  */


//insecure but using just for fake info and testing
if(localStorage.getItem("test@example.com") == null){
  //account 1
  var userData = {'password': 'pass', "name": "John Smith", "age":"50", 'knee':'true', 'back':'false','wrist':'false'};
  var curremail = "test@example.com";
  localStorage.setItem(curremail, JSON.stringify(userData));
}

if(localStorage.getItem("back@injury.com") == null){
//account 2
  var userData = {'password': 'word', "name": "Jeff Lee", "age":"55",'knee':'false', 'back':'true','wrist':'false'};
  var curremail = "back@injury.com";
  localStorage.setItem(curremail, JSON.stringify(userData));
}

/* LOAD EXERCISE POPOVERS */ 
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


/* testing popover stuff */
window.onload = function(){
  $('#exercise-info1').on('show.bs.popover', function (event) {
    $(this).popover(content) = 'content from using $this';
  });
  $("#exercise-info1").popover({content: "content from using .popover",});
});
/*
$('#exerciseInfoPopover').on('show.bs.popover', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var exercise = button.data('exercise') // Extract info from data-* attributes
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
  if(exercise == "Situp"){
    modal.find('#modal-text').text("Lay flat on your back with your knees bent. Put your"+
                                   " arms across your chest and lift your upper body until"+
                                   " your elbows touch your knees and then lay back so that"+
                                   " your back is on the ground again. Repeat this 10 times.");
  }
  if(exercise == "Pushup"){
    modal.find('#modal-text').text("Stand an arms length away from a sturdy wall. Keeping your feet planted,"+
                                    " bend your arms so your body moves closer to the wall, then push agaisnt"+
                                    " the wall so your are standing up straight again. Repeat this 10 times.");
  }
  if(exercise == "Wallsit"){
    modal.find('#modal-text').text("Put your back against a wall. Lower your body by bending your knees as if you were sitting in a chair. Hold this position for 30 seconds.");
  }
  if(exercise == "Calfraise"){
    modal.find('#modal-text').text("Stand with your feet flat on the ground. lift your heels until you are are"+
                                  " your tip-toes and hold for one second and then return to a normal standing position. Repeat this 10 times.");
  }
});
}; */


// enables Bootstrap popovers for document
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

function timer(obj,time) {
    $(obj).attr("disabled", true);
    var timeleft = time;
    var minutes = Math.floor(timeleft/60);
    var seconds = timeleft - minutes*60;
    obj.innerHTML = minutes + ":" + seconds + " left";
    var downloadTimer = setInterval(function(){
    timeleft--;
    minutes = Math.floor(timeleft/60);
    seconds = timeleft - minutes*60;
    if(seconds < 10)
      seconds = "0"+seconds;
    obj.textContent = minutes + ":" + seconds + " left";
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      obj.textContent = "DONE!";
    }
    },1000);
}

function counter(obj) {
    $(obj).attr("disabled", true);
    obj.innerHTML = "10 left";
    var timeleft = 10;
    var imgNum = 0;
    var downloadTimer = setInterval(function(){
      timeleft--;
      obj.textContent = timeleft + " left";

      if(timeleft <= 0){
        clearInterval(downloadTimer);
        obj.textContent = "DONE!";
      }
    },2000);

  if(this.id == "squat"){

    var switchImg = setInterval(function(){
      if(timeleft <= 0)
        document.getElementById("exercise-img2").src = "./img/Squat1.png";
      else if(imgNum % 2 == 0)
        document.getElementById("exercise-img2").src = "./img/Squat1.png";
      else 
        document.getElementById("exercise-img2").src = "./img/Squat2.png";
      
      imgNum++;
    },1000);
  }

}

function checkLogin(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if(localStorage.getItem(email) == null){
    alert("There is no account using this email address");
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

function createAccount() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var knee = document.getElementById("knee").checked.toString();
  var back = document.getElementById("back").checked.toString();
  var wrist = document.getElementById("wrist").checked.toString();


  var jsonObj = JSON.stringify({'password': password, "name": name, "age":age, 'knee':knee, 'back': back,'wrist': wrist});
  localStorage.setItem(email, jsonObj);
  localStorage.setItem("currentUser", email);
  location = "./";

}


/* LOAD EXERCISE MODALS (disabled) *********
window.onload = function(){
$('#exerciseInfoModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var exercise = button.data('exercise') // Extract info from data-* attributes
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
  if(exercise == "Situp"){
    modal.find('#modal-text').text("Lay flat on your back with your knees bent. Put your"+
                                   " arms across your chest and lift your upper body until"+
                                   " your elbows touch your knees and then lay back so that"+
                                   " your back is on the ground again. Repeat this 10 times.");
  }
  if(exercise == "Pushup"){
    modal.find('#modal-text').text("Stand an arms length away from a sturdy wall. Keeping your feet planted,"+
                                    " bend your arms so your body moves closer to the wall, then push agaisnt"+
                                    " the wall so your are standing up straight again. Repeat this 10 times.");
  }
  if(exercise == "Wallsit"){
    modal.find('#modal-text').text("Put your back against a wall. Lower your body by bending your knees as if you were sitting in a chair. Hold this position for 30 seconds.");
  }
  if(exercise == "Calfraise"){
    modal.find('#modal-text').text("Stand with your feet flat on the ground. lift your heels until you are are"+
                                  " your tip-toes and hold for one second and then return to a normal standing position. Repeat this 10 times.");
  }
});
}; 
*/
