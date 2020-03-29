const skiDate = new Date(2021, 2, 28, 6)
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let milli = document.getElementById('milli')
let ski = document.getElementById('ski')

let randNr = Math.floor(Math.random() * 4)
ski.style.backgroundImage = `url('img/${randNr}.jpg')`;

setInterval(() => {
    let timeDiff = new Date(skiDate - new Date());
    days.innerHTML = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    hours.innerHTML = timeDiff.getUTCHours()
    minutes.innerHTML = timeDiff.getUTCMinutes()
    seconds.innerHTML = timeDiff.getUTCSeconds()
    milli.innerHTML = 1000 - timeDiff.getUTCMilliseconds()
}, 35)

setInterval(() => {
    
}, 1000)
