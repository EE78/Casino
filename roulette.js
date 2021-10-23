const USER = {
  avatar: " ",
  name: " ",
  email: " ",
  login: function () {
    this.isAuth = true;
    (this.avatar =
      "https://lh3.googleusercontent.com/ogw/ADea4I7XqIe_ZfFjtQmhSNnls1C50SQCOE2dSyGo-hxiHg=s83-c-mo"),
      (this.name = "EVGENY"),
      (this.email = "ereminevgeny78@gmail.com");
  },
  logout: function () {
    this.isAuth = false;
    this.avatar = " ";
    this.name = " ";
    this.email = " ";
  },
  balance: 200,
  isAuth: false,
};

document.getElementById("login").addEventListener("click", handleAuth);

function handleAuth() {
  if (USER.isAuth === false) {
    USER.login();
    displayUser();
    document.getElementById("cash").innerHTML = USER.balance;
    document.getElementById("login").innerText = "LOG OUT";
  } else {
    USER.logout();
    displayUser();
    document.getElementById("cash").innerHTML = ""
    document.getElementById("login").innerText = "LOG IN";
  }
}
function displayUser() {
  document.getElementById("name").innerHTML = USER.name;
  document.getElementById("email").innerHTML = USER.email;
  document.getElementById("avatar").src = USER.avatar;
}

document.getElementById("balance").innerHTML = "YOUR BALANCE: " + USER.balance;
document.getElementById("placebet-red").addEventListener("click", onClickRed);
document
  .getElementById("placebet-black")
  .addEventListener("click", onClickBlack);
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
  document.getElementById("balance").innerHTML =
    "YOUR BALANCE: " + USER.balance;
}

function getColor() {
  const random = Math.random(); // 0.11111
  const multi = random * 10; // 1.111

  const wholeNumber = multi.toFixed(0); // "1"
  const num = parseInt(wholeNumber, 10); // 1

  // const num = parseInt((Math.random() * 10).toFixed(0), 10);

  if (num >= 5) {
    return "RED";
  } else {
    return "BLACK";
  }
}

function placeBet(bet, color) {
  // bet от 100
  // color red или black

  if (bet < 100) {
    document.getElementById("message").innerHTML = "DO A NORMAL BET";
    return;
  }

  if (bet > USER.balance) {
    document.getElementById("message").innerHTML = "YOU'RE POOR";
    return;
  }

  // поставил ставку - снялись бабки
  USER.balance = USER.balance - bet;

  // получаем рандомный цвет
  const randomColor = getColor(); // "red" либо "black"

  // проверяем рандомное цвет и цвет который ввел пользователь
  if (randomColor === color) {
    USER.balance = USER.balance + bet * 2;
    document.getElementById("message").innerHTML = "YOUR RESULT: YOU WON";
    return;
  }

  document.getElementById("message").innerHTML =
    "YOUR RESULT: YOU LOSE, THE COLOR WAS: " + randomColor;
}

function onClickDeposit() {
  let amount = parseInt(document.getElementById("bet").value, 10);
  USER.balance = USER.balance + amount;
  document.getElementById("balance").innerHTML =
    "YOUR BALANCE: " + USER.balance;
}
