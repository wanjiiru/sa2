$('document').ready(function(){
  $('.mc-form-example').submit(function(e){
        
    //prevent the form from submitting via the browser redirect
    e.preventDefault();
        
    //grab attributes and values out of the form
    var data = {email: $('#mc-email').val()};
    var endpoint = $(this).attr('action');
        
    //make the ajax request
    $.ajax({
      method: 'POST',
      dataType: "json",
      url: endpoint,
      data: data
    }).success(function(data){
      if(data.id){
        //successful adds will have an id attribute on the object
        alert('thanks for signing up');
      } else if (data.title == 'Member Exists') {
        //MC wil send back an error object with "Member Exists" as the title
        alert('thanks, but you are alredy signed up');
      } else {
        //something went wrong with the API call
      	alert('oh no, there has been a problem');
      }
    }).error(function(){
      //the AJAX function returned a non-200, probably a server problem
      alert('oh no, there has been a problem');
    });
  });
});