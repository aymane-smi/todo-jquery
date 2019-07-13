var lock=6;
var colors = randomColors(lock);
var picked = pickcolor();
var color =  document.querySelector("#colorDisplay");
var msgDisplay = document.querySelector("#message");
color.innerHTML = picked;
var squares = document.querySelectorAll(".square");
var winheader = document.querySelector("h1");
var restart = document.querySelector("#reset");
var hardbtn = document.querySelector(".hard");
var easybtn = document.querySelector(".easy");
for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === picked){
			msgDisplay.textContent = "Correct";
			colormatch(picked);
			winheader.style.backgroundColor = picked;
			restart.textContent = "Play again!";
		}
		else{
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "Try again";
		}
	});
}
function colormatch(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = picked;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+b+", "+g+")";
}
function randomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
restart.addEventListener("click", function(){
	colors = randomColors(lock);
	picked = pickcolor();
	color.innerHTML = picked;
	winheader.style.backgroundColor = "rgb(137, 207, 240)";
	msgDisplay.textContent = "new session";
	restart.textContent = "new colors";
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("click");
	easybtn.classList.remove("click");
	lock=6;
	colors = randomColors(lock);
	picked = pickcolor();
	color.innerHTML = picked;
	winheader.style.backgroundColor = "rgb(137, 207, 240)";
	msgDisplay.textContent = "new session";
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display="block";
	}
});
easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("click");
	easybtn.classList.add("click")
	lock=3;
	colors = randomColors(lock);
	picked = pickcolor();
	color.innerHTML = picked;
	winheader.style.backgroundColor = "rgb(137, 207, 240)";
	msgDisplay.textContent = "new session";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display= "none";
		}
	}
});