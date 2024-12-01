const hours = document.getElementById('hours')
const minutes = document.getElementById('minuties')
const seconds = document.getElementById('seconds')


const clock = setInterval(function time() {

    let dataToday = new Date()
    let hor = dataToday.getHours()
    let min = dataToday.getMinutes()
    let sec = dataToday.getSeconds()


    if (hor < 10) hor = '0' + hor;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;



    hours.textContent = hor
    minutes.textContent = min
    seconds.textContent = sec
})

