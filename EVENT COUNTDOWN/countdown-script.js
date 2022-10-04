// toggling btn countdown window and register form

let registerBtn = document.getElementById("order")
registerBtn.addEventListener("click", ()=>{
    document.querySelector(".countdown-box").classList.add("hidden")
    document.querySelector(".form").classList.remove("hidden")
    document.querySelector(".form").classList.add("visible")
})
document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".countdown-box").classList.remove("hidden")
    document.querySelector(".countdown-box").classList.remove("visible")
    document.querySelector(".form").classList.remove("visible")
    document.querySelector(".form").classList.add("hidden")
})


//Implementing the count down 

function countDown(){
    let date = new Date(2022, 10, 27, 10).getTime()
    let today = new Date().getTime() 
    let daysLeft = date - today

    let countdownDisplay = document.getElementsByClassName("time")

    let days = Math.floor(daysLeft/(1000*60*60*24))
    let hours = Math.floor((daysLeft%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor(((daysLeft%(1000*60*60*24))%(1000*60*60))/(1000*60))
    let seconds = Math.floor((((daysLeft%(1000*60*60*24))%(1000*60*60))%(1000*60))/(1000))

    if (days < 10) {
        countdownDisplay[0].innerHTML = "0" + days
    } else {
        countdownDisplay[0].innerHTML = days
    }
    if (days < 0){
        countdownDisplay[0].innerHTML = "00"
    }
    if (hours < 10) {
        countdownDisplay[1].innerHTML = "0" + hours
    } else {
        countdownDisplay[1].innerHTML = hours
    }
    if (hours < 0){
        countdownDisplay[1].innerHTML = "00"
    }
    if (minutes < 10) {
        countdownDisplay[2].innerHTML = "0" + minutes
    } else {
        countdownDisplay[2].innerHTML = minutes
    }
    if (minutes < 0){
        countdownDisplay[2].innerHTML = "00"
    }
    if (seconds < 10) {
        countdownDisplay[3].innerHTML = "0" + seconds
    } else {
        countdownDisplay[3].innerHTML = seconds
    }
    if (seconds < 0){
        countdownDisplay[3].innerHTML = "00"
    }
}

setInterval(countDown, 1000)

// form validation
let guides = document.querySelectorAll(".guide")
let emailRegex = /^[\w\d]+@\bgmail\b\.com$/
let nameRegex = /^(\b[A-Za-z]+\b)\s(\b[A-Za-z]+\b)/i

document.forms[0].addEventListener("submit", (e)=>{
    e.preventDefault()

    // name validation
    if (nameRegex.test(document.querySelector("#name").value)) {
        document.getElementById("name").style.color = "unset"
        if (guides[0].classList.contains("visible")) {
            guides[0].classList.replace("visible", "hidden")
        } else {
            if(!guides[0].classList.contains("hidden")){
                guides[0].classList.add("hidden")
            }
        }
    } else {
        document.getElementById("name").style.color = "red"
        document.getElementById("name").focus()
        if (guides[0].classList.contains("hidden")) {
            guides[0].classList.replace("hidden", "visible")
        } else {
            if(!guides[0].classList.contains("visible")){
                guides[0].classList.add("visible")
            }
        }
        return false
    }

    // email validation
    if (emailRegex.test(document.querySelector("#mail").value)) {
        document.getElementById("mail").style.color = "unset"
        if (guides[1].classList.contains("visible")) {
            guides[1].classList.replace("visible", "hidden")
        } else {
            if(!guides[1].classList.contains("hidden")){
                guides[1].classList.add("hidden")
            }
        }
    } else {
        document.getElementById("name").style.color = "red"
        document.getElementById("name").focus()
        if (guides[1].classList.contains("hidden")) {
            guides[1].classList.replace("hidden", "visible")
        } else {
            if(!guides[1].classList.contains("visible")){
                guides[1].classList.add("visible")
            }
        }
        return false
    }
    messenger()

    // implementing the confirm window
    if (document.querySelector(".confirm").classList.contains("hidden")) {
        document.querySelector(".confirm").classList.replace("hidden", "visible")
    } else {
        if (!document.querySelector(".confirm").classList.contains("visible")) {
            document.querySelector(".confirm").classList.add("visible")
        }
    }
    return true
})

let message;
let confimWindowControl = document.querySelector(".take-way").children
confimWindowControl[1].addEventListener("click", ()=>{
        document.querySelector(".confirm").classList.replace("visible", "hidden")
})
confimWindowControl[0].addEventListener("click", ()=>{
    message = JSON.parse(message) 
    window.location.href = `https://wa.me/256706337924/text=Name:%20${message.name}%0AE-mail:%20${message.email}%0ACourse:%20${message.course}%0AGender:%20${message.sex}`
})  


function messenger(){
    let selectedSex;
    document.querySelectorAll("input[name = sex]").forEach(element => {
        if (element.checked) {
            selectedSex = element.value
        }
    });

    let studentObject = {
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        course: document.getElementById("course").value,
        sex: selectedSex
    }
    message = JSON.stringify(studentObject)

    function inforConfirm() {
        let toconfirmInfo = document.querySelector(".field-values").children
        toconfirmInfo[0].textContent = studentObject.name
        toconfirmInfo[1].textContent = studentObject.email
        toconfirmInfo[2].textContent = studentObject.course
        toconfirmInfo[3].textContent = studentObject.sex
    }

    inforConfirm()
}
