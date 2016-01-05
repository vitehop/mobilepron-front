var currentpage = 1;
var stream_title = "HD";

$(document).ready(function() {

  $.ajax({

      // The URL for the request
      url: "http://localhost:8081/api/streams/" + currentpage + "?stream_title="+stream_title,
      type: "GET",
      dataType : "json",

      success: function( data ) {
          var view = [];
          var table = [];
          data.forEach(function(video,i){
            view.push("<div class='grid-item'><a href=" + video.url + "><img src=" + video.thumb + "></a></div>");
            table.push("<tr><td>"+i+": "+video.source+"</td><td>"+video.title+"</td><td>"+video.views+" views</td><td>"+video.daysOnline+" days online</td><td>"+video.viewsPerDay+" Views Per Day</td><td>"+video.magicRank+" MagicRank<td>");
          });
          $("<table>", {"class":"datatable", html: table.join("") }).appendTo("body");
          $( "<div>", { "class": "grid", html: view.join("") }).appendTo( "body" );


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
