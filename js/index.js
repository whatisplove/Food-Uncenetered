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

var colours = ['#07C673', '#031962', '#EF0859', '#FFF1E7', '#F8B81E', '#92ff00'];

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
  context.fillStyle = "rgba(255, 73, 15, 0.05)";
  context.fill();
}

function myTimer() {
 fillCanvas();
}

$(".blur, .desc, #canvas").click(function() {
    if (firstClick == false) {
      firstClick = true;
      var myVar = setInterval(myTimer, 370);
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
