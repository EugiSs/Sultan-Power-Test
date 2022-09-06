import * as utils from './modules/utils.js'
utils.isWebp()

// Scroll
document.querySelector('.header__btn').addEventListener('click', function (e) {
  e.preventDefault()
  let address = this.getAttribute('href')
  document.querySelector(address).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// Timer
utils.startTimer(setTimerValues)
function setTimerValues(timerValues) {
  let timerEl = document.querySelectorAll('.timer')
  timerEl.forEach((el) => {
    el.querySelector('.hours').innerHTML = timerValues.hours
    el.querySelector('.minutes').innerHTML = timerValues.minutes
    el.querySelector('.seconds').innerHTML = timerValues.seconds
  })
}

// Forms
document.querySelectorAll('.submit').forEach((el) => {
  el.addEventListener('click', utils.checkFormData)
})

document.querySelectorAll('.input-phone').forEach((el) => {
  el.addEventListener('click', function (e) {
    e.target.value = e.target.placeholder
  })
})
