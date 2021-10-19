console.log();

let USER_BALANCE = 200;

document.getElementById("balance").innerHTML = "YOUR BALANCE: " +  USER_BALANCE;
document.getElementById("placebet-red").addEventListener("click", onClickRed);
document.getElementById("placebet-black").addEventListener("click", onClickBlack);
document.getElementById("deposit").addEventListener("click", onClickDeposit);


function onClickRed() {
  onClick("red");
}

function onClickBlack() {
  onClick("black");
}

function onClick(color) {
  let bet = parseInt(document.getElementById("bet").value, 10);
  placeBet(bet, color);
  document.getElementById("balance").innerHTML = "YOUR BALANCE: " + USER_BALANCE;
}


function getColor() {
  const random = Math.random(); // 0.11111
  const multi = random * 10; // 1.111

  const wholeNumber = multi.toFixed(0); // "1"
  const num = parseInt(wholeNumber, 10); // 1

  // const num = parseInt((Math.random() * 10).toFixed(0), 10);

  if (num >= 5) {
    return "red";
  } else {
    return "black";
  }
}

function placeBet(bet, color) {
  // bet от 100
  // color red или black
  if (bet < 100) {
    document.getElementById("message").innerHTML = "DO A NORMAL BET";
    return;
  }

  if (bet > USER_BALANCE) {
    document.getElementById("message").innerHTML = "YOU'RE POOR";
    return;
  }

  // поставил ставку - снялись бабки
  USER_BALANCE = USER_BALANCE - bet;

  // получаем рандомный цвет
  const randomColor = getColor(); // "red" либо "black"

  // проверяем рандомное цвет и цвет который ввел пользователь
  if (randomColor === color) {
    USER_BALANCE = USER_BALANCE + bet * 2;
    document.getElementById("message").innerHTML = "YOUR RESULT: YOU WON";
    return;
  }

  document.getElementById("message").innerHTML = "YOUR RESULT: YOU LOSE, THE COLOR WAS: " +  randomColor;
}

function onClickDeposit() {
  let amount = parseInt(document.getElementById("bet").value, 10);
  USER_BALANCE = USER_BALANCE + amount;
  document.getElementById("balance").innerHTML = "YOUR BALANCE: " + USER_BALANCE;
}