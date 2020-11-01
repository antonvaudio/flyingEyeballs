
$(".videowindow").hover(function() {
 var id =  $(this).attr("id");
  $(this).addClass(".frame");
  console.log("You hoverd over: " + "#" + id);
}, function() {
  $(this).removeClass(".frame");
 }
);


https://stackoverflow.com/questions/41418413/how-to-overlay-an-iframe-and-allow-click-through