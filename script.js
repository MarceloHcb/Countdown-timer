const secondsContainer = document.getElementById("seconds")
const minutesContainer = document.getElementById("minutes")
const hoursContainer = document.getElementById("hours")
const daysContainer = document.getElementById("days")
const nextYearContainer = document.getElementById("years")
const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`)
nextYearContainer.textContent = nextYear

const updateCountDown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60 ) %24
    const minutes = Math.floor(difference / 1000 / 60 ) %60
    const seconds = Math.floor(difference / 1000  ) %60

    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
    daysContainer.textContent = days < 10 ? "0" + days : days;
}

setInterval(updateCountDown, 1000)