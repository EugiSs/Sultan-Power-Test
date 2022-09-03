export default function startTimer() {
  let timer = document.querySelector('.timer')
  let hoursElem = timer.querySelector('.hours')
  let minutesElem = timer.querySelector('.minutes')
  let secondsElem = timer.querySelector('.seconds')

  let hours = Number(hoursElem.innerHTML)
  let minutes = Number(minutesElem.innerHTML)
  let seconds = Number(secondsElem.innerHTML)

  if (seconds == 0) {
    if (minutes == 0) {
      if (hours == 0) {
        // timer.style.display = 'none'
        alert('Акция закончилась')
        return
      }
      hours--
      minutes = 60
    }
    minutes--
    seconds = 59
  } else {
    seconds--
  }
  hours = pad(hours)
  minutes = pad(minutes)
  seconds = pad(seconds)

  hoursElem.innerHTML = hours
  minutesElem.innerHTML = minutes
  secondsElem.innerHTML = seconds

  setTimeout(startTimer, 1000)
}

function pad(num) {
  return (num < 10 ? '0' : '') + num
}
