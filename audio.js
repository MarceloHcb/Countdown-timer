// Pega o ID do audio
const podcastAudio = document.getElementById('bg-audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
let playShow = function() {
  podcastAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
};

let pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = "flex";
  pauseBtn.style.display = "none";
};