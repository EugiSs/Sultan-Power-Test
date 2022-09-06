export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }

  // Добавление класса 'webp' или 'no-webp' для HTML тега
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

// _________________________________________
export function checkInputs(inputs) {
  let empty = false
  for (let input of inputs) {
    if (input.value == '') {
      input.style.borderBottom = '1px solid red'
      empty = true
    } else {
      input.style.borderBottom = 'none'
    }
  }
  return empty
}

export function isNumberValid(value) {
  value = value.replaceAll(/[\+\ \(\)-]/g, '')
  console.log(value)
  if (value.length < 6 || value.length > 11) return false
  let num = /^(\+7|7|8)?[0-9]*$/g

  // Более строгая проверка только на мобильные номера
  // let num = /^(7|8)?[489][0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}$/
  return num.test(value)
}

export function checkFormData(event) {
  event.preventDefault()
  let formInputs = event.target.closest('form').querySelectorAll('input')
  if (checkInputs(formInputs)) {
    alert('Поля не могут быть пустыми')
    return
  }
  let phoneInput = event.target.closest('form').querySelector('.input-phone')
  if (isNumberValid(phoneInput.value)) {
    for (let input of document.querySelectorAll('input')) {
      input.value = ''
    }
    alert('Данные успешно отпралены')
  } else {
    phoneInput.style.borderBottom = '1px solid red'
    alert('Номер введен неверно')
  }
}

// ______________________________
export function startTimer(cb) {
  calcTimer(cb)
  setInterval(calcTimer, 1000, cb)
}

function calcTimer(cb) {
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

  cb({ hours: hours, minutes: minutes, seconds: seconds })
}

function pad(num) {
  return (num < 10 ? '0' : '') + num
}
