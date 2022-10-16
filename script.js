let message = document.querySelector('.message')
let namee = 'Adenike'
message.innerHTML = namee
let guess = document.querySelector('.guess')
let number = document.querySelector('.number')
let btnCheck = document.querySelector('.btn-check')
let keepGuesing = document.querySelector('h1')
let body = document.body
let score = document.querySelector('.score') 

guess.innerHTML = 'Type a Number'
console.log(guess.innerHTML);




let startGame = () => {
    let randomm = Math.floor(Math.random() *5 +1)
     number.innerHTML = randomm
    
    
     

   
     if (guess.value == null || guess.value < 1 || guess.value > 5 || guess.value == "") {
        number.innerHTML = '?'
        message.innerHTML = 'error'
        keepGuesing.innerHTML = 'Input a Number between 1-5'
        score.innerHTML = 5
     }
      else if (guess.value ==randomm ) {
         message.innerHTML = 'CORRECT!'
         keepGuesing.innerHTML = 'Numbers Match!'
         body.style.background = 'green'
         score.innerHTML = 5

         
     } else if(score.textContent == 0){
        message.textContent = 'Game Over'
        keepGuesing.innerHTML = 'Game Over'
        body.style.background = 'red'
        



     }else{
        message.innerHTML = 'INCORRECT!'
        keepGuesing.innerHTML = 'Keep Guessing'
        body.style.background = 'blue'

        score.innerHTML--
        
     }
     

     
    }
    
     btnCheck.addEventListener('click', startGame)
      
     

