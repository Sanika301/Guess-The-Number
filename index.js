let randomNum=Math.floor(Math.random()*100)
let guess
let count=0;
do
{
    guess=prompt("Guess the number: ");
    guess=Number.parseInt(guess);
    count++;
    if(guess!=randomNum)
    {
      if(guess<randomNum)
      {
        alert("Number is greater than",guess);
      }
      else
      {
        alert("Number is less than",guess);
      }
    }
}while(guess!=randomNum)
alert("Your score is ",100-count)