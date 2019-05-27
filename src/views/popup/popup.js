const wheelupButton = document.getElementById('wheelup');

function restartVideo() {
	console.log('> youtube-wheelup: restarting video')
	const video = document.getElementsByClassName('video-stream html5-main-video')[0];
	video.currentTime = 0;
	console.log('> youtube-wheelup: video restarted')
};

wheelupButton.onclick = () => {
	chrome.tabs.executeScript({ code: `(${restartVideo})()` });
};
