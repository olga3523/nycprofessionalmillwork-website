const video = document.querySelector('#video_1');
const placeholder = video.querySelector('.placeholder');

function renderVideo() {
  placeholder.style.display = 'none';

  let tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

placeholder.addEventListener('click', renderVideo);

// 2. This code loads the IFrame Player API code asynchronously.

let firstScriptTag = document.getElementsByTagName('script')[0];

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video_1', {
    height: '315',
    width: '560',
    videoId: 'DIFneFvoSpo',
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}
