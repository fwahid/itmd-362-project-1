//Prevents entire page from reloading on submit
$(document).ready(function() {
  $("#newsletter").on('submit', function(e) {
    e.preventDefault();
  })
})

function checkAll() {
  //Resets output from previous check
  document.getElementById("approvedx").innerHTML = "";
  document.getElementById("agex").innerHTML = "";
  var x = 0;
  // AGE CHECK
  if (document.getElementById("yesage").checked === false) {
    document.getElementById("agex").innerHTML = "Please fill out all fields";
    x = x + 1;
  }
  // APPROVAL
  if (x == 0) {
    document.getElementById("approvedx").innerHTML = "Thank you for signing up!";
  }
}