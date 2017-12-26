const audios = {
    "65": "sounds/clap.wav",
    "83": "sounds/hihat.wav",
    "68": "sounds/kick.wav",
    "70": "sounds/openhat.wav",
    "71": "sounds/boom.wav",
    "72": "sounds/ride.wav",
    "74": "sounds/snare.wav",
    "75": "sounds/tom.wav",
    "76": "sounds/tink.wav"
}

function removeTransition(e) {
    console.log(e)
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    let key = e.type === "keydown" ? e.keyCode : this.getAttribute('data-key');
    if (typeof audios[key] != "undefined") {
        let audio = new Audio(audios[key]);
        document.querySelector(".key[data-key='" + key + "']").classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }
}
const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(item => {
    item.addEventListener("click", playSound);
});
window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
