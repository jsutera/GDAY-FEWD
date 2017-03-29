// $("a").on("click", function() {
// var colorred = $("#red").val();
// var colorgreen = $("#green").val();
// var colorblue = $("#blue").val();


// selectedBG = "rgb(" + colorred + "," + colorgreen + "," + colorblue + ")";

// console.log(selectedBG);

// $("div#wrapper").css("background-color", selectedBG)

// });


$("a").on("click", function() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  $("div#wrapper").css("background-color", hue)
}


  )