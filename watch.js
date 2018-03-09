console.log('Hello.');

const video = document.querySelector('#MainVideoPlayer > video');
const watchLinks = document.querySelectorAll('a.watch');
const videoIds = Array.prototype.map.call(watchLinks, watchLink => Number(watchLink.href.split('watch/')[1]));
const nextVideoId = Math.max(...videoIds);

video.addEventListener('canplay', (e) => {
  console.log('Can play the video.');
  video.play();
});

video.addEventListener('ended', (e) => {
  console.log('Playback completes.');
  location = `http://www.nicovideo.jp/watch/${nextVideoId}`;
});
