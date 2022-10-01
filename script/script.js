const buttons = document.querySelectorAll(`.form__rating`)
const bSubmit = document.querySelector(`#submit`)

let picked = 0

buttons.forEach(element => {
    element.addEventListener(`click`, () => { select(element) })
});

const select = (e) => {
    if (picked !== Number(e.innerHTML)) {
        buttons.forEach(element => {
            element.classList.remove(`selected`)
        })
        picked = Number(e.innerHTML)
        e.classList.add(`selected`)
    }
}

const showPick = (e) => {
    const toShow = document.querySelector(`#selection__text`)
    toShow.innerHTML = `You selected ${e} out of 5`
}

const submit = () => {
    const card = document.querySelector(`#card__inner`)
    if (picked !== NaN && picked > 0 && picked <= 5) {
        card.style.transform = 'rotateY(180deg)'
        showPick(picked)
    }
}

bSubmit.addEventListener(`click`, submit)