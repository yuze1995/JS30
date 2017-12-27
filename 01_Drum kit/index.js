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

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(item => item.addEventListener("click", playSound));
window.addEventListener("keydown", playSound);

function playSound(e) {
    let key = e.type === "keydown" ? e.keyCode : this.getAttribute('data-key');
    if (typeof audios[key] != "undefined") {
        let audio = new Audio(audios[key]);
        const item = document.querySelector(".key[data-key='" + key + "']");
        item.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
        window.setTimeout(function () {
            item.classList.remove("playing");
        }, 100);
    }
}
