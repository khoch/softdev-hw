var c = document.getElementById("myCanvas");
console.log(c);
var ctx = c.getContext("2d");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var growing = true;
var rad = 0;
var not_running = true;

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

var startAnim = function(e){
	if (not_running){
		Circle();
		not_running = false;
	}
};

var stopAnim = function(e){
	if (!not_running){
		window.cancelAnimationFrame(myAnimation);
		not_running = true;
	}
};

var Circle = function(e){
	if (growing){
		rad += 1;	
	}else{
		rad -= 1;
	}
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.arc(250, 250, rad, 0, Math.PI*2);
	ctx.fill();
	if (rad == 0 || rad == c.width/2){
		growing = !growing;
	}
	myAnimation = window.requestAnimationFrame(Circle);
};



start.addEventListener("click",startAnim);
stop.addEventListener("click",stopAnim);