class RPS {
   gameChoiceBtn = document.querySelectorAll('.user-btn')
   history = document.querySelector('.history')
   rstBtn = document.querySelector('.rst-btn')
   userSpan = document.querySelector('#user')
   aiSpan = document.querySelector('#ai')
   winrate = document.querySelector('#winrate')
   userScore = 0;
   compScore = 0;
   index = 0

   #reset() {
	  this.userScore = 0
	  this.compScore = 0
	  this.index = 0
	  this.aiSpan.textContent = '0'
	  this.userSpan.textContent = '0'
	  this.history.innerHTML = ''
	  this.winrate.textContent = '0%'
   }

   #time() {
	  let date = new Date()
	  return date.toLocaleTimeString().slice(0, 8)
   }

   #names(name) {
	  if (name === 1) return '&#129308;'
	  else if (name === 2) return '&#9995;'
	  else if (name === 3) return '&#9986;'
   }

   #compChoice() {
	  return Math.ceil(Math.random() * 3)
   }

   #compare(userChoice, compChoice) {
	  switch (true) {
		 case (userChoice === 1 && compChoice === 3):
			this.userScore++
			break
		 case (userChoice === 1 && compChoice === 2):
			this.compScore++
			break
		 case (userChoice === 2 && compChoice === 1):
			this.userScore++
			break
		 case (userChoice === 2 && compChoice === 3):
			this.compScore++
			break
		 case (userChoice === 3 && compChoice === 1):
			this.compScore++
			break
		 case (userChoice === 3 && compChoice === 2):
			this.userScore++
			break
	  }
	  if (userChoice !== compChoice) this.index++
	  this.#render(userChoice, compChoice)
   }

   #render(userChoice, compChoice) {
	  this.userSpan.textContent = this.userScore.toString()
	  this.aiSpan.textContent = this.compScore.toString()
	  if (this.userScore) this.winrate.textContent = `${(this.userScore / this.index * 100).toString().slice(0, 2)}%`
	  this.history.insertAdjacentHTML('afterbegin', `<div><p>&#10095; user ${this.#names(userChoice)} &#9876; comp ${this.#names(compChoice)}</p><span>${this.#time()}</span></div>`)
   }

   app() {
	  this.gameChoiceBtn.forEach(btn => btn.onclick = (e) => this.#compare(+e.target.value, this.#compChoice()))
	  this.rstBtn.addEventListener('click', () => {
		 this.#reset()
	  })
   }
}

let rps = new RPS()
window.onload = () => rps.app()












