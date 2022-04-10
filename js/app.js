if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
            console.log('Registration succeeded.');
        }).catch((error) => {
            console.log('Registration failed with ' + error);
        });
}

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('PWA installation done!');
});

window.addEventListener('appinstalled', (evt) => {
    console.log('PWA installation done!');
});

const skiDate = new Date(2022, 3, 10, 10)
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
// let milli = document.getElementById('milli')
let ski = document.getElementById('ski')

setInterval(() => {
    let timeDiff = new Date(skiDate - new Date());
    days.innerHTML = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    hours.innerHTML = timeDiff.getUTCHours()
    minutes.innerHTML = timeDiff.getUTCMinutes()
    seconds.innerHTML = timeDiff.getUTCSeconds()
    // milli.innerHTML = 1000 - timeDiff.getUTCMilliseconds()
}, 35)

setBackground();
setInterval(() => {
    setBackground();
}, 8000)

function setBackground() {
    let randNr = Math.floor(Math.random() * 9);
    document.body.style.backgroundImage = `url('img/${randNr}.jpg')`;
}

