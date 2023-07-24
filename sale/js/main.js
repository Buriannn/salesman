// const BTN = document.querySelectorAll('.one-btn')
const POP = document.querySelector('.pop_up')
const POP2 = document.querySelector('.pop_up2')
const POP_CLOSE = document.querySelector('.pop_close')
const POP_CLOSE2 = document.querySelector('.pop_close2')

document.getElementById('expert').addEventListener('click', () => {
    POP.classList.toggle('active')
})
document.getElementById('spek').addEventListener('click', () => {
    POP2.classList.toggle('active')
})

POP_CLOSE.onclick = function () {
    POP.classList.toggle('active')
}
POP_CLOSE2.onclick = function () {
    POP2.classList.toggle('active')
}

