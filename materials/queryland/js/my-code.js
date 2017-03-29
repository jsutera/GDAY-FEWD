// $("button").on("click", function() {
// $("p.cool").text("I have been clicked")
// });

$("button").on("click", function() {
  var input = $('input').val()
  $("h1.cool").text(input)
});