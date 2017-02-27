$.noConflict();
(function($) {
  $(document).ready(function() {
    $('#form').on('submit', function(event) {
      var input + $('#email').val();
      console.log(input);
        if($.trim($' && '#email').val()) === ' ') {
          alert('Please fill missing information');
        }
      event.preventDefault();