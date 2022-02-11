const hoursContainer = document.querySelector('.hours')
const minutesContainer = document.querySelector('.minutes')
const secondsContainer = document.querySelector('.seconds')
const tickElements = Array.from(document.querySelectorAll('.tick'))

let last = new Date(0)
last.setUTCHours(-1)

const tickState = true

function updateTime () {
  const now = new Date
  
  const lastHours = last.getHours().toString()
  const nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }
  
  const lastMinutes = last.getMinutes().toString()
  const nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }
  
  const lastSeconds = last.getSeconds().toString()
  const nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    updateContainer(secondsContainer, nowSeconds)
  }
  
  last = now
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  const time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  const first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  const last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  element.lastElementChild.textContent = number
  const second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 100)