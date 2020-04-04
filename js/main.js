if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/rainersskicountdown/service-worker.js')
        .then((reg) => {
            // registration worked
            console.log('Registration succeeded. Scope is ');
        }).catch((error) => {
            // registration failed
            console.log('Registration failed with ' + error);
        });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    // e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    // showInstallPromotion();
});

// buttonInstall.addEventListener('click', (e) => {
//     // Hide the app provided install promotion
//     hideMyInstallPromotion();
//     // Show the install prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//             console.log('User accepted the install prompt');
//         } else {
//             console.log('User dismissed the install prompt');
//         }
//     })
// });

window.addEventListener('appinstalled', (evt) => {
    console.log('a2hs installed');
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

setInterval(() => {
    setBackground();
}, 8000)

function setBackground() {
    let randNr = Math.floor(Math.random() * 9);
    document.documentElement.style.backgroundImage = `url('img/${randNr}.jpg')`;
}

