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
          //var table = [];
          //console.log("data received!: "+data.length+" items");
          //var data = JSON.parse(json);
          //console.log(data);
          data.forEach(function(video,i){
            //console.log("Days online for video "+video.title+": "+video.daysOnline);
            //video.thumb="http://www.revistacomotu.com/wp-content/uploads/2015/11/del-reves-revistacomotu-400x225.jpg";
            view.push("<div class='grid-item'><a href=" + video.url + "><img src=" + video.thumb + "></a></div>");
            //table.push("<tr><td>"+i+"</td><td>"+video.title+"</td><td>"+video.views+"</td><td>"+video.publish_date+"</td><td>"+video.source+"</td><td>"+video.daysOnline+"</td><td>"+video.viewsPerDay+"</td>");

          //  console.log("Publish date: "+video.publishDate+" | Today date: "+todayDate+" | Diff: "+diffDays+" days");
          });
          //$("<table>", {"class":"datatable", html: table.join("") }).appendTo("body");

          $( "<div>", { "class": "grid", html: view.join("") }).appendTo( "body" );

          // $('.grid').masonry({
          //   // options
          //   itemSelector: '.grid-item',
          //   columnWidth: 400
          // });

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
