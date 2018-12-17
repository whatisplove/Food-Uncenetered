var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 
var firstClick = false;
// context.clearRect(0, 0, canvas.width, canvas.height);

function circle(x, y, radius, fillstyle) {
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = fillstyle;
      context.fill();
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var colours = ['#009A0F', '#FF5F00', '#FF3757', '#FFF1E7', '#C03500', '6FC200'];

function drawRandomCircle() {
    colourId = randomInt(0, colours.length);
    let colour = colours[colourId];
    let x = randomInt(0,300);
    let y = randomInt(0,150);
    let radius = randomInt(20, 60);
    circle(x, y, radius, colour);
}

function fillCanvas() {
  context.beginPath();
  context.rect(0, 0, 300, 150);
  context.fillStyle = "rgba(121, 63, 15, .005)";
  context.fill();
}

function myTimer() {
 fillCanvas();
}

$(".blur, .desc, #canvas").click(function() {
    if (firstClick == false) {
      firstClick = true;
      var myVar = setInterval(myTimer, 200);
    }
    $(".blur").show();
    fillCanvas();
    drawRandomCircle();
});

// $(function() {
//     var timer = null, 
//         interval = 1000,
//         value = 0;

//     $("#start").click(function() {
//       if (timer !== null) return;
//       timer = setInterval(function () {
//           $("#input").val(++value);
//       }, interval); 
//     });