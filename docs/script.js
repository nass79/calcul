function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let score = 0
let number1 = Number(randomInt(10,100))
let number2 = Number(randomInt(10,100))


let nb1 = document.getElementById("nb1")
let nb2 = document.getElementById("nb2")

nb1.textContent = number1
nb2.textContent = number2

let reponse = document.querySelector("input")

let scr = document.getElementById("score")
let ess = document.getElementById("try")
let tr = 0

let wrong = document.getElementById("wrong")
reponse.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    rep = Number(reponse.value)
    if(number1 + number2 === rep){
      
      score += 1
      number1 = randomInt(10, 100)
      number2 = randomInt(10, 100)
      nb1.textContent = number1
      nb2.textContent = number2
      scr.textContent = score
    }
    else{
      wrong.textContent = "Mauvaise réponse"
      setTimeout(() => { 
        wrong.textContent = ""
      },2000)
    }
    tr += 1
    ess.textContent = tr
  }
}  )