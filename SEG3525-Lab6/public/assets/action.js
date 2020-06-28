// jQuery that will "listen" to the html websitesurvey.html
$(document).ready(function(){

  $('form').on('submit', function(){

      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/uiSurvey',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          $("#btnSubmit").css("background-color", "green");
          $("#btnSubmit").prop("disabled", "true");
          $("#btnSubmit").text("Merci!");
        }
      });
      return false;
  });
});
