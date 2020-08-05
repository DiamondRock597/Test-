//Star rating

const stars1 = document.querySelector(".show1").querySelectorAll(".fa")
for (let i = 0; i < stars1.length; i++) {

    stars1[i].addEventListener("mouseover", function () {
        //console.log(i)

        for (let j = 0; j < stars1.length; j++) {
            stars1[j].classList.remove("fa-star")
            stars1[j].classList.add("fa-star-o")

        }
        for (let j = 0; j <= i; j++) {
            stars1[j].classList.remove("fa-star-o")
            stars1[j].classList.add("fa-star")
        }

    })
}
const stars2 = document.querySelector(".show2").querySelectorAll(".fa")
for (let i = 0; i < stars2.length; i++) {

    stars2[i].addEventListener("mouseover", function () {
        //console.log(i)
        for (let j = 0; j < stars2.length; j++) {
            stars2[j].classList.remove("fa-star")
            stars2[j].classList.add("fa-star-o")
        }
        for (let j = 0; j <= i; j++) {
            stars2[j].classList.remove("fa-star-o")
            stars2[j].classList.add("fa-star")
        }

    })
}




//checkbox,radio
const check1 = document.querySelector("#checkbox1")
const span1 = document.querySelector("#actCheck1")

check1.addEventListener("click", function (event) {

    if (check1.checked) {
        check1.classList.add("Active")
        span1.style.display = "inline-block"
        span2.style.display = "none"
        check2.checked = false
    } else {
        check1.classList.remove("Active")
        span1.style.display = "none"
    }
})


const check2 = document.querySelector("#checkbox2")
const span2 = document.querySelector("#actCheck2")
check2.addEventListener("click", function (event) {

    if (check2.checked) {
        check2.classList.add("Active")
        span2.style.display = "inline-block"
        span1.style.display = "none"
        check1.checked = false
    } else {
        check2.classList.remove("Active")
        span2.style.display = "none"
    }
})




const radio1 = document.querySelector("#radio1")
const radspan1 = document.querySelector("#actRad1")

radio1.addEventListener("click", function () {

    if (radio1.checked) {
        radio1.classList.add("Active")
        radspan1.style.display = "inline-block"
        radspan2.style.display = "none"
        radio2.checked = false
    } else {
        radio1.classList.remove("Active")
        radspan1.style.display = "none"
    }
})


const radio2 = document.querySelector("#radio2")
const radspan2 = document.querySelector("#actRad2")
radio2.addEventListener("click", function () {

    if (radio2.checked) {
        radio2.classList.add("Active")
        radspan2.style.display = "inline-block"
        radspan1.style.display = "none"
        radio1.checked = false
    } else {
        radio2.classList.remove("Active")
        radspan2.style.display = "none"
    }
})


//Switcher


const switcher1 = document.querySelector("#switcher_on1")
const spanSwitch1 = document.querySelector("#switchSp1")
switcher1.addEventListener("click", () => {
    if (switcher1.checked) {
        spanSwitch1.innerHTML = "ON"
    }
    if (!switcher1.checked) {
        spanSwitch1.innerHTML = "OFF"
    }
})

const switcher2 = document.querySelector("#switcher_on2")
const spanSwitch2 = document.querySelector("#switchSp2")
switcher2.addEventListener("click", () => {
    if (switcher2.checked) {
        spanSwitch2.innerHTML = "ON"
    }
    if (!switcher2.checked) {
        spanSwitch2.innerHTML = "OFF"
    }
})






