function rollDiceAll() {
  var randomNumber1 = Math.floor(Math.random()*6) +1;
  var randomNumber2 = Math.floor(Math.random()*6) +1;

  
  document.querySelector('.img1').setAttribute("src", `images/dice${randomNumber1}.png`);

  document.querySelector('.img2').setAttribute("src", `images/dice${randomNumber2}.png`);


  if (randomNumber1 < randomNumber2) {
    document.querySelector('.announce').innerHTML = 'Player Two is the Winner!!';
  } else {
    document.querySelector('.announce').innerHTML = 'Player One is the Winner!!';
  }
}

rollDiceAll();
