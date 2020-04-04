if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
            console.log('Registration succeeded.');
        }).catch((error) => {
            console.log('Registration failed with ' + error);
        });
}

let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    installButton.hidden = false;
});

installButton.addEventListener('click', (e) => {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('PWA installation accepted');
            installButton.hidden = true;
        } else {
            console.log('PWA installation cancelled');
        }
    })
});

window.addEventListener('appinstalled', (evt) => {
    console.log('PWA installation done!');
});

const skiDate = new Date(2021, 2, 28, 6)
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
// let milli = document.getElementById('milli')
let ski = document.getElementById('ski')

setBackground();

setInterval(() => {
    let timeDiff = new Date(skiDate - new Date());
    days.innerHTML = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    hours.innerHTML = timeDiff.getUTCHours()
    minutes.innerHTML = timeDiff.getUTCMinutes()
    seconds.innerHTML = timeDiff.getUTCSeconds()
    // milli.innerHTML = 1000 - timeDiff.getUTCMilliseconds()
}, 35)

// setInterval(() => {
//     setBackground();
// }, 8000)

function setBackground() {
    let randNr = Math.floor(Math.random() * 9);
    document.documentElement.style.backgroundImage = `url('img/${randNr}.jpg')`;
}

