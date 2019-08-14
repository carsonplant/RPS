
function play(userChoice) {
  let computerChoice = "rock"
  if (userChoice == "rock") {
    if (computerChoice == "rock") {
      return alert("You draw\nPlay again?")
    } else if (computerChoice == "paper") {
      return alert("You lose")
    } else if (computerChoice == "scissors") {
      return alert("You win")
    }
  }
  if (userChoice == "paper") {
    if (computerChoice == "rock") {
      return alert("You win")
    } else if (computerChoice == "paper") {
      return alert("You draw\nPlay again?")
    } else if (computerChoice == "scissors") {
      return alert("You lose")
    }
  }
  if (userChoice == "scissors") {
    if (computerChoice == "rock") {
      return alert("You lose")
    } else if (computerChoice == "paper") {
      return alert("You win")
    } else if (computerChoice == "scissors") {
      return alert("You draw\nPlay agian?")
    }
  }
}
play()
