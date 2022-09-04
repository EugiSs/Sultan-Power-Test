export default function startTimer() {
  calcTimer()
  setInterval(calcTimer, 1000)
}

function calcTimer() {
  let currentDate = new Date().getTime()
  let targetDate = new Date().setHours(24, 0, 0)
  let totalSeconds = (targetDate - currentDate) / 1000

  let hours = Math.floor(totalSeconds / 3600)
  if (totalSeconds < 3600) hours = 0
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60)
  let seconds = Math.floor(totalSeconds - hours * 3600 - minutes * 60)

  hours = pad(hours)
  minutes = pad(minutes)
  seconds = pad(seconds)

  let timerEl = document.querySelector('.timer')
  timerEl.querySelector('.hours').innerHTML = hours
  timerEl.querySelector('.minutes').innerHTML = minutes
  timerEl.querySelector('.seconds').innerHTML = seconds
}

function pad(num) {
  return (num < 10 ? '0' : '') + num
}
