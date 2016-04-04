var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
console.log(c);
var logo = document.getElementById("logo");
var stop = document.getElementById("stop");
var start = document.getElementById("start");

x = Math.floor((Math.random() * 500-logo.width - 5) + 2); 
y = Math.floor((Math.random() * 500-logo.height - 5) + 2); 

down = true;
right = true;

var not_running = true;

var startAnim = function(e){
	if (not_running){
		runLogo();
		not_running = false;
	}
};

var stopAnim = function(e){
	if (!not_running){
		window.cancelAnimationFrame(myAnimation);
		not_running = true;
	}
};

var runLogo = function(e){
	if (right){
		x += 2;	
	}else{
		x -= 2;
	}
	if (down){
		y += 2;	
	}else{
		y -= 2;
	}
	ctx.drawImage(logo, x, y);
	if (x < 0 || x >= 500-logo.width){
		right = !right;
	}
	if (y < 0 || y >= 500-logo.height){
		down = !down;
	}
	myAnimation = window.requestAnimationFrame(runLogo);
};

start.addEventListener("click",startAnim);
stop.addEventListener("click",stopAnim);