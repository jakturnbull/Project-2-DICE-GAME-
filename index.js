//generates a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random()*6)+1;

//finds the object using querySelector in this case an image and then changes the text of that attributes randomNumber1
// eg dice+1+.png so everytime the website is refreshed a new dice image appears
    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//replicating the process above but for the second image
var randomNumber2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

//series of if statements that compare the random numbers generated then changes the content
//of the h1 to declare a winner or a draw the h1 is nested with an anchor tag so it be clicked to refresh
//the page and play Again


if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML += ("<a href='index.html'>Draw, Play Again?</a>");
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML += ("<a href='index.html'>Player 1 Wins, Play Again?</a>");
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML += ("<a href='index.html'>Player 2 Wins, Play Again?</a>");
}
