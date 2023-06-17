const character = "SWG";
let characterlength = character.length;
let a = character.charAt(Math.floor(Math.random() * characterlength))
let b
let c
do {
  b = prompt("Enter 'S' for Snake,'W' for Water and 'G' for Gun:");
  c = confirm("Are you sure ?");
  if (c == true) {
    console.log("Computer:", a);
    console.log("Your:", b);
    if (a == 'S' && b == 'W' || a == 'W' && b == 'G' || a == 'G' && b == 'S') {
      console.log("You Loose!!");
    }
    else {
      console.log("You win!!");
    }
  }
} while (c != true)

