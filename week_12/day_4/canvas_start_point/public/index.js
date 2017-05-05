var app = function(){
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext('2d');

//   var img = document.createElement("img");
//   img.src = "http://vignette2.wikia.nocookie.net/farmville2/images/2/26/Cheese_Quiche.png";

//   var draw = function(){
//     context.drawImage(img, 200, 200, 90, 80);

//   };
//   img.onload = draw;
// };

  
  // context.fillStyle = "pink";
  // context.fillRect(200, 200, 50, 50);

  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(100, 200);
  // context.stroke();

  context.beginPath();
  context.moveTo(200, 300);
  context.lineTo(300, 300);
  context.lineTo(300, 300);
  context.closePath();
  context.stroke();


  context.beginPath();
  context.arc(400, 100, 50, 0, Math.PI*2, true);
  context.stroke();

  context.beginPath();
  context.arc(420, 100, 10, 0, Math.PI*2, true);
  context.fillStyle = "black";

  context.fill();

  context.beginPath();
  context.arc(200, 100, 50, 0, Math.PI*2, true);
  context.stroke();

  context.beginPath();
  context.arc(220, 100, 10, 0, Math.PI*2, true);
  context.fillStyle = "black";
  context.fill();

  var drawCircle = function(x, y){
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI*2, true);
    context.stroke();
  };

  canvas.onclick = function(event){
    // console.log("x pos", event.x);
    // console.log("y pos", event.y);
    drawCircle(event.x, event.y);

  };

  var colorPicker = document.querySelector('#input-color');
  colorPicker.onchange = function(){
    // debugger;
    var newColor = this.value;
    context.strokeStyle = newColor;    
  };


};
  // debugger;
window.onload = app;