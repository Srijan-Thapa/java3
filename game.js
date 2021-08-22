var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(0,newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}
var g=3;

function abc() {
	var cancel = document.getElementsByClassName("start")[0];
    cancel.style.display = "none";

setInterval(() => {
	var b=document.createElement('div');
	b.className='bomb';
	var c=Math.floor(Math.random() * window.innerHeight);
	b.style.left=c+'px';
	document.body.appendChild(b);
	setInterval(() => {
		var c=b.offsetTop;
		b.style.top=c+1+'px';
	}, 10);
	setInterval(() => {
		var d= document.getElementsByClassName('sky')[0];
	   if(b.offsetTop>d.offsetHeight) {
			// console.log('abd')
			var e = document.createElement('div'); 
			e.className = 'explosion';    
			e.style.top = b.offsetTop +'px';      
			e.style.left = b.offsetLeft + 'px';
		   document.body.appendChild(e);
		   b.remove();
		   setTimeout(() => {
			    e.remove(); 
		   }, 200);
	   }	
	
	}, 10); 
	setInterval(() => {
		var f=document.getElementById('player');
		if(b.offsetTop + b.offsetHeight > f.offsetTop &&
			b.offsetTop < f.offsetTop + f.offsetHeight &&
			b.offsetLeft + b.offsetWidth > f.offsetLeft &&
			b.offsetLeft < f.offsetLeft + f.offsetWidth) {
				// alert ('abe');
				var e = document.createElement('div'); 
				e.className = 'explosion';    
				e.style.top = b.offsetTop +'px';      
				e.style.left = b.offsetLeft + 'px';
		   	document.body.appendChild(e);
		   	b.remove();
		   setTimeout(() => {
			    e.remove(); 
		   }, 200);
		   f.className='player hit';
		   var h = document.getElementsByTagName('li'); 
        g--;                
        h[g].style.display = 'none';
		if(g==0){
			f.className='character dead';	
			// b.remove();
		setTimeout(() => {
			var i =document.getElementsByClassName('start');
			i[0].firstChild.nodeValue='Game Over';
			i[0].style.display='block';
		}, 15);
	

		}
			}
	}, 10);
}, 1000);

}

function myLoadFunction() {
	// var sky = document.getElementsByClassName('sky')[0];
	// console.log(sky.offsetHeight);
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
	var a= document.getElementsByClassName('start')[0];
	a.addEventListener('click',abc);
}


document.addEventListener('DOMContentLoaded', myLoadFunction);
