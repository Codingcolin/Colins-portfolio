
function startTime() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		if (hours > 12) {
			hours -= 12;
		} else if (hours === 0) {
			hours = 12;
		}

		function checkTime(i) {
				if (i < 10) {
					i = "0" + i;
				}
				return i;
			}
		minutes = checkTime(minutes);
		seconds = checkTime(seconds);

		document.getElementById('time').innerHTML = hours + ":" + minutes + ":" +seconds;

		setTimeout(function () {
			startTime()
		}, 1000);	
	
}

var clockStart = document.getElementById('time');
clockStart.onload = startTime;
	
