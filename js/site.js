//Prevents entire page from reloading on submit
$(document).ready(function() {
  $("#newsletter").on('submit', function(e) {
    e.preventDefault();
  })
})

function checkAll() {
  //Resets output from previous check
  document.getElementById("approved").innerHTML = "";
  document.getElementById("age1").innerHTML = "";
  var x = 0;
  // AGE CHECK
  if (document.getElementById("yesage").checked === false) {
    document.getElementById("age1").innerHTML = "Please fill out all fields";
    x = x + 1;
  }
  // APPROVAL
  if (x == 0) {
    document.getElementById("approved").innerHTML = "Thank you for signing up!";
  }
}