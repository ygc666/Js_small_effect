function doMove(obj, str, a, b, endFn) {
	a = parseInt(getComputedStyle(obj)[str]) < b ? a : -a;
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var speed = parseInt(getComputedStyle(obj)[str]) + a;
		if (speed > b && a > 0 || speed < b && a < 0) {
			speed = b;
		}
		obj.style[str] = speed + 'px';
		if (speed == b) {
			clearInterval(obj.timer);
			endFn && endFn();
		}
	}, 30);
}