let scoreHome = 0
let scoreGuest = 0
let resetEL = document.getElementById("reset-el")

let scoreEL = document.getElementById("score-el")
let scoreELG = document.getElementById("score-elg")

let add1Home = document.getElementById("add1-home")
let add2Home = document.getElementById("add2-home")
let add3Home = document.getElementById("add3-home")

let add1Guest = document.getElementById("add1-guest")
let add2Guest = document.getElementById("add2-guest")
let add3Guest = document.getElementById("add3-guest")

add1Home.addEventListener("click", () =>{
    scoreHome += 1
    // console.log(score)
    scoreEL.textContent = scoreHome
})


add2Home.addEventListener("click", () =>{
    scoreHome += 2
    // console.log(score)
    scoreEL.textContent = scoreHome
})

add3Home.addEventListener("click", () =>{
    scoreHome += 3
    // console.log(score)
    scoreEL.textContent = scoreHome
})


// GUEST


add1Guest.addEventListener("click", () =>{
    scoreGuest += 1
    scoreELG.textContent = scoreGuest
})
add2Guest.addEventListener("click", () =>{
    scoreGuest += 2
    scoreELG.textContent = scoreGuest
})

add3Guest.addEventListener("click", () =>{
    scoreGuest += 3
    scoreELG.textContent = scoreGuest
})

resetEL.addEventListener("click", () =>{
    scoreHome = 0
    scoreEL.textContent = 0
    scoreGuest = 0
    scoreELG.textContent = 0

})