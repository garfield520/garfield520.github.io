
function star (){
	var starBox = document.createElement('div');
	starBox.id = starBox;
	starBox.style.position = 'relative';
	starBox.innerHTML = '<div class="canvaszz"></div><canvas id="canvas">YOUR BROWSER DO NOT SUPPORT CANVAS</canvas>';
	document.body.appendChild(starBox);

	var canvas = document.getElementById('canvas');

	var ctx = canvas.getContext('2d');

	var w, h, hue, starts, count, maxStarts;
		w = canvas.width = document.documentElement.clientWidth;
		h = canvas.height = document.documentElement.clientHeight - 3;

		hue = 217;
		stars = [];
		count = 0;
		maxStars = 100;

	var canvas2 = document.createElement('canvas');
	var ctx2 = canvas2.getContext('2d');
	canvas2.width = 100;
	canvas2.height = 100;

	var half = canvas2.width / 2;
	var gradient = ctx2.createRadialGradient(half, half, 0, half, half, half);
	gradient.addColorStop(0.025, '#CCC');
	gradient.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
	gradient.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
	gradient.addColorStop(1, 'transparent');

	ctx2.fillStyle = gradient;
	ctx2.beginPath();
	ctx2.arc(half, half, half, 0, Math.PI * 2);
	ctx2.fill();

	function random ( min, max ){
		if ( arguments.length < 2 ) {
			max = min;
			min = 0;
		}

		if ( min > max ) {
			var hold = max;
			max = min;
			min = hold;
		}

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function maxOrbit ( x, y ){
		var max = Math.max(x, y);
		var diameter = Math.round(Math.sqrt(max * max + max * max));
		return diameter / 2;
	}

	function Star (){
		this.orbitRadius = random(maxOrbit(w, h));
		this.radius = random(60, this.orbitRadius) / 8;
		this.orbitX = w / 2;
		this.orbitY = h / 2;
		this.timePassed = random(0, maxStars);
		this.speed = random(this.orbitRadius) / 100000;
		this.alpha = random(2, 10) / 10;

		count++;
		stars[count] = this;
	}

	Star.prototype.draw = function() {
		var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
			y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
			twinkle = random(10);

		if ( twinkle === 1 && this.alpha > 0 ) {
			this.alpha -= 0.05;
		} else if ( twinkle === 2 && this.alpha < 1 ) {
			this.alpha += 0.05;
		}

		ctx.globalAlpha = this.alpha;
		ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
		this.timePassed += this.speed;
	}

	//	新建星星
	for (var i = 0; i < maxStars; i++) {
	  new Star();
	}

	function animation() {
		//	在目标图像上显示源图像
		ctx.globalCompositeOperation = 'source-over';
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = 'hsla(' + hue + ', 60%, 10%, 2)';
		ctx.fillRect(0, 0, w, h)

		//	显示源图像+目标图像
		ctx.globalCompositeOperation = 'lighter';
		for (var i = 1, l = stars.length; i < l; i++) {
			stars[i].draw();
		};

		window.requestAnimationFrame(animation);
	}

	animation();
}