$.noConflict();

jQuery(function($) {
  $('#user-form').on('submit', function(event) {
      
    var emailInput = $('#email').val();
    console.log(emailInput);
    
    if($.trim($('#email').val()) === '') {
      alert('Please fill out all fields');
    }
      
    event.preventDefault();
      
  });
});