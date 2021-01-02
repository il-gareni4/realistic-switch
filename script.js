const switchSound = new Audio('./sounds/switch-1.mp3');

document.querySelector('.switch-body').addEventListener('click', (e) => {
    document.body.classList.toggle('on')
    switchSound.pause()
    switchSound.currentTime = 0;
    switchSound.play()
})