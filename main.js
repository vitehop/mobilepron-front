var currentpage = 1;

$(document).ready(function() {

  $.ajax({

      // The URL for the request
      url: "http://localhost:8080/api/videos/" + currentpage +"/",
      type: "GET",
      dataType : "json",

      success: function( json ) {

          console.log(json);

          var items = [];
          var data = JSON.parse(json);
          $.each( data.videos, function(i,video) {
            alert(video.title);
            items.push( "<li>" + i + ": "+ video.title + "</li>" );
          });

          $( "<ul/>", {
            "class": "my-new-list",
            html: items.join("")
          }).appendTo( "body" );

      },

      error: function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
      },

      // Code to run regardless of success or failure
      complete: function( xhr, status ) {

      }
  });

});
