let body = document.querySelector('body');

let popBtnOne = document.querySelector('.open-pop-btn1');
let popBtnTwo = document.querySelector('.open-pop-btn2');

let popUpOne = document.querySelector('.pop-up-one');
let popUpTwo = document.querySelector('.pop-up-two');

let popClose = document.querySelectorAll('.pop-up__close');

let popUp = document.querySelectorAll('.pop-up')








popBtnOne.addEventListener('click', function () {
    popUpOne.classList.add('pop-up--active');
    body.classList.add('overflowHidden')
})

popBtnTwo.addEventListener('click', function () {
    popUpTwo.classList.add('pop-up--active');
    body.classList.add('overflowHidden')
})


for(e = 0; e < popClose.length; e++) {
    popClose[e].addEventListener('click', function () {
        for (i = 0; i < popUp.length; i++) {
            popUp[i].classList.remove('pop-up--active');
        }
        body.classList.remove('overflowHidden')
    })
}

// popClose.addEventListener('click', function () {
//
//
// })