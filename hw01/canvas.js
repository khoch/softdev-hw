var c = document.getElementById("myCanvas");
console.log(c);
var ctx = c.getContext("2d");
var button = document.getElementById("clear");
var oldX = "NULL";
var oldY = "NULL";

//ignore
//ctx.fillStyle = "#000ff";
//ctx.fillRect(50,50,100,200);
//ctx.beginPath();
//ctx.arc(200,300,50,0,Math.PI*2);
//ctx.fill();

//ignore part 2
//ctx.beginPath();
//ctx.moveTo(250,250);
//ctx.quadraticCurveTo(250,250,400,250);
//ctx.quadraticCurveTo(250, 250, 200, 300);
//ctx.closePath();
//ctx.stroke();
//ctx.fill();

var clear = function(e){
	e.preventDefault();
	ctx.clearRect(0,0,500,500);
	oldX = "NULL";
	oldY = "NULL";

};

var dot = function(e){
e.preventDefault();1
if (oldX == "NULL"){
	oldX = e.offsetX;
	oldY = e.offsetY;
} 
ctx.beginPath();
ctx.arc(e.offsetX, e.offsetY, 5, 0, Math.PI*2);
ctx.moveTo(oldX,oldY);
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
oldX = e.offsetX;
oldY = e.offsetY;
ctx.fill();
};



button.addEventListener("click",clear);
c.addEventListener("click", dot);
