var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

//ears
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(200,50);
canvas.lineTo(225,75);
canvas.lineTo(225,25);
canvas.fill();

canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(200,50);
canvas.lineTo(175,75);
canvas.lineTo(175,25);
canvas.fill();

//head
canvas.fillStyle = "blue";
canvas.beginPath();
canvas.moveTo(200,50);
canvas.lineTo(175,75);
canvas.lineTo(225,75);
canvas.fill();

canvas.fillStyle = "blue";
canvas.beginPath();
canvas.moveTo(175,75);
canvas.lineTo(225,75);
canvas.lineTo(200,100);
canvas.fill();

//neck
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(210,90);
canvas.lineTo(175,130);
canvas.lineTo(210,170);
canvas.fill();

//body
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(210,90);
canvas.lineTo(210,200);
canvas.lineTo(260,155);
canvas.fill();

canvas.fillStyle = "blue";
canvas.beginPath();
canvas.moveTo(260,155);
canvas.lineTo(185,220);
canvas.lineTo(260,220);
canvas.fill();

//tail
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(260,220);
canvas.lineTo(300,220);
canvas.lineTo(350,170);
canvas.lineTo(300,170);
canvas.fill();

//fish face
canvas.fillStyle = "blue";
canvas.fillRect(600,170,50,50);

//fish fin
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(600,170);
canvas.lineTo(650,170);
canvas.lineTo(650,120);
canvas.fill();

//fish body
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(650,120);
canvas.lineTo(650,220);
canvas.lineTo(750,120);
canvas.fill();

//fish body part 2
canvas.fillStyle = "blue";
canvas.beginPath();
canvas.moveTo(750,120);
canvas.lineTo(675,195);
canvas.lineTo(825,195);
canvas.fill();

//fish fin
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(675,195);
canvas.lineTo(675,245);
canvas.lineTo(725,245);
canvas.fill();

//fish dorsal fin
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(650,120);
canvas.lineTo(700,95);
canvas.lineTo(735,45);
canvas.lineTo(685,65);
canvas.fill();

//fish tail
canvas.fillStyle = "blue";
canvas.beginPath();
canvas.moveTo(825,195);
canvas.lineTo(900,170);
canvas.lineTo(875,220);
canvas.fill();

//swan head 1
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(400,350);
canvas.lineTo(350,400);
canvas.lineTo(400,400);
canvas.fill();

//swan head 2
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(400,350);
canvas.lineTo(440,390);
canvas.lineTo(400,390);
canvas.fill();

//swan neck
canvas.fillStyle = "blue";
canvas.fillRect(400,390,40,40);

//swan neck 2
canvas.fillStyle = "yellow";
canvas.fillRect(400,430,40,40);

//swan body 1
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(400,430);
canvas.lineTo(360,470);
canvas.lineTo(400,470);
canvas.fill();

//swan body 2
canvas.fillStyle = "blue";
canvas.beginPath();
canvas.moveTo(440,470);
canvas.lineTo(400,470);
canvas.lineTo(400,490);
canvas.fill();

//swan body 3
canvas.fillStyle = "yellow";
canvas.fillRect(360,470,40,60);

//swan body 4
canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(360,530);
canvas.lineTo(440,530);
canvas.lineTo(490,580);
canvas.lineTo(410,580);
canvas.fill();

//swan body 5
canvas.fillStyle = "blue";
canvas.beginPath();
canvas.moveTo(400,490);
canvas.lineTo(400,530);
canvas.lineTo(440,530)
canvas.fill();

//swan tail
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(400,490);
canvas.lineTo(470,560);
canvas.lineTo(540,490);
canvas.fill();

function createShape(){
  var x = Math.floor((Math.random() * 3) + 1);
  var y = Math.floor((Math.random() * 3) + 1);
  var differentColor;
  var xCoordinate = Math.floor((Math.random() * 1250) + 1);
  var yCoordinate = Math.floor((Math.random() * 1000) + 1);

  var triangleCX = xCoordinate + 100;
  var triangleCY = yCoordinate + 100;
  console.log("fdsjk");
  //colors
  if(y == 1){
    differentColor = "red";
  } else if(y == 2) {
    differentColor = "yellow";
  } else {
    differentColor = "blue";
  }

  //fillStyle
  if(x == 1){
    canvas.fillStyle = differentColor;
    canvas.fillRect(xCoordinate,yCoordinate,100,100);
  } else if(x == 2) {
    canvas.fillStyle = differentColor;
    canvas.beginPath();
    canvas.moveTo(xCoordinate,yCoordinate);
    canvas.lineTo(xCoordinate,triangleCY);
    canvas.lineTo(triangleCX,triangleCY);
    canvas.fill();
  } else {
    canvas.fillStyle = differentColor;
    canvas.beginPath();
    canvas.arc(xCoordinate,yCoordinate, 50, 0, 2*Math.PI);
    canvas.fill();
  }
}

var randomBool = true;

function doSomething(){
  if(randomBool == true){
    $("body").css("background-color", "white");
    $("header").css({"background-color": "white", "border-bottom": "1px solid black"});
    $("h1").css("color", "black");
    $("#fox").css("color", "black");
    randomBool = false;
  } else {
    $("body").css("background-color", "black");
    $("header").css({"background-color": "black", "border-bottom": "1px solid white"});
    $("h1").css("color", "white");
    $("#fox").css("color", "white");
    randomBool = true;
  }
}


//Beta testing:
var canvasb = $("#c");
var c = canvasb[0].getContext("2d");

var path = "http://wonderfl.net/images/icon/e/ec/ec3c/ec3c37ba9594a7b47f1126b2561efd35df2251bfm";
var image = new DragImage(path, 200, 100);

var loop = setInterval(function() {

    c.fillStyle = "gray";
    c.fillRect(0, 0, 500, 500);

    image.update();

}, 30);

var mouseX = 0, mouseY = 0;
var mousePressed = false;
canvasb.mousemove(function(e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
})

$(document).mousedown(function(){
    mousePressed = true;
}).mouseup(function(){
    mousePressed = false;
});

function DragImage(src, x, y) {
    var that = this;
    var startX = 0, startY = 0;
    var drag = false;
    this.x = x;
    this.y = y;
    var img = new Image();
    img.src = src;
    this.update = function() {
        if (mousePressed){
            var left = that.x;
            var right = that.x + img.width;
            var top = that.y;
            var bottom = that.y + img.height;
            if (!drag){
              startX = mouseX - that.x;
              startY = mouseY - that.y;
            }
            if (mouseX < right && mouseX > left && mouseY < bottom && mouseY > top){
               drag = true;
            }
        }else{
           drag = false;
        }
        if (drag){
            that.x = mouseX - startX;
            that.y = mouseY - startY;
        }
        c.drawImage(img, that.x, that.y);
    }
}
