console.log('Hello.');

const video = document.querySelector('#MainVideoPlayer > video');
const watchLinks = document.querySelectorAll('a.watch');
const videoLinks = Array.prototype.map.call(watchLinks, (watchLink) => {
  const id = watchLink.href.split('watch/')[1];
  return {
    id: Number(id.replace('sm', '')),
    hasPrefixSm: id.includes('sm'),
    link: watchLink,
  };
});
const nextVideoId = Math.max(...videoLinks.map(link => link.id));
const nextVideo = videoLinks.find(link => (link.id === nextVideoId));

video.addEventListener('canplay', (e) => {
  const fullscreenButton = document.querySelector('button[data-title=フルスクリーン]');
  console.log('Can play the video.');
  video.play();
  fullscreenButton.click();
});

video.addEventListener('ended', (e) => {
  console.log('Playback completes.');
  location = nextVideo.link;
});
