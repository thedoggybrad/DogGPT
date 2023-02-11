var sound = document.createElement('audio')
sound.id = 'audio'
sound.src = 'https://cdn.jsdelivr.net/gh/thedoggybrad/dogpt@master/dog.mp3'
sound.type = 'audio/mp3'
document.body.appendChild(sound)

function playAudio() {
  document.getElementById('audio').play();
}

setTimeout("playAudio()", 1000);
