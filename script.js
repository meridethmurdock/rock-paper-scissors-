var yesOrNo = (pompt("Hey! It's your computer here. Want to play a game?"));
var yesOrNo = yesOrNo.toLowerCase();

if (yesOrNo === "yes") {
    alert("Let's play rock, paper, scissors. Best out of 5 wins. Good luck!");
    RPS();
} else {
    alert("You're supposed to say yes...")
}

function RPS() {
  
  var x = 0;
  var y = 0;
  
  for (i = 0; i < 30; i++) {
    
    if (x == 3) {
          alert("You won! ...I'll remember this when the robots take over.");
          break;
      } else if (y == 3) {
          alert("You lost... Better luck next time!");
          break;
      } else 
  
    var playerChoice = prompt("Rock, paper, scissors!");
    var playerChoice = playerChoice.toLowerCase();
    
    var computerChoice = () => (Math.floor(Math.random() * 3 + 1));

      if (playerChoice == "rock" && computerChoice() == 1) { 
          alert(`Rock does not affect to rock. You have ${x} point(s)!`);
      } else if (playerChoice == "rock" && computerChoice() == 2) {
          y++;
          alert(`Rock is covered by paper, rendering it... useless. You have ${x} point(s)!`); 
      } else if (playerChoice == "rock" && computerChoice() == 3) {
          x++;
          alert(`Rock smashes scissors to bits! You have ${x} point(s)!`);
      } else if (playerChoice == "paper" && computerChoice() == 1) {
          x++;
          alert(`Paper beats rock! You have ${x} point(s)!`);
      } else if (playerChoice == "paper" && computerChoice() == 2) {
          alert(`Paper does not affect paper. You have ${x} point(s)!`);
      } else if (playerChoice == "paper" && computerChoice() == 3) {
          y++;
          alert(`Paper is shredded by scissors... You have ${x} point(s)!`); 
      } else if (playerChoice == "scissors" && computerChoice() == 1) {
          y++;
          alert(`Scissors loses all purpose to rock... You have ${x} point(s)!`);
      } else if (playerChoice == "scissors" && computerChoice() == 2) {
          x++;
          alert(`Scissors obliterates the paper! You have ${x} point(s)!`);  
      } else if (playerChoice == "scissors" && computerChoice() == 3) {
          alert(`Scissors does not affect scissors. You have ${x} point(s)!`);
      } else {
          alert("FUUUUCK");
      }
    
    }
    
}








