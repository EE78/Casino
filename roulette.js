const USER = {
  avatar: "",
  name: "",
  email: "",
  balance: "",
  login: function() {
    this.isAuth = true;
    
    (this.avatar =
      "https://lh3.googleusercontent.com/ogw/ADea4I7XqIe_ZfFjtQmhSNnls1C50SQCOE2dSyGo-hxiHg=s83-c-mo"),
      (this.name = "Evgeny"),
      (this.email = "ereminevgeny78@gmail.com");
    this.balance = 0;
    },
    logout: function() {
      this.isAuth = false;
  
      this.avatar = "";
      this.name = "";
      this.email = "";
      this.balance = "";
    }, 
    isAuth: false
  };
  
  document.getElementById("login").addEventListener("click", handleAuth);
  
  function handleAuth() {
    if (USER.isAuth === false) {
      USER.login();
      displayUser();
      document.getElementById("login").innerText = "Log out";
      } else {
        USER.logout();
        displayUser();
        document.getElementById("login").innerText = "Log in";
      }
  }
  
  function displayUser() {
    document.getElementById("avatar").src = USER.avatar;
    document.getElementById("name").innerHTML = USER.name;
    document.getElementById("email").innerHTML = USER.email;
    document.getElementById("cash").innerHTML = USER.balance;
  }
  
  
  
  
  
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
    document.getElementById("cash").innerHTML = USER.balance;
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
    if (USER.isAuth === false) {
      document.getElementById("message").innerHTML = "Please log in";
      return;
    }
  
    if (bet < 100) {
      document.getElementById("message").innerHTML = "Place a normal bet";
      return;
    }
  
    if (bet > USER.balance) {
      document.getElementById("message").innerHTML = "You`re too poor";
      return;
    }
  
    // поставил ставку - снялись бабки
    USER.balance = USER.balance - bet;
  
    // получаем рандомный цвет
    const randomColor = getColor(); // "red" либо "black"
  
    // проверяем рандомное цвет и цвет который ввел пользователь
    if (randomColor === color) {
      USER.balance = USER.balance + bet * 2;
      document.getElementById("message").innerHTML = "You won";
      return;
    }
  
    document.getElementById("message").innerHTML = "You lose, color was: " +  randomColor;
  }
  
  function onClickDeposit() {
    if (USER.isAuth === false) {
      document.getElementById("message").innerHTML = "Please log in";
      return;
    }
    let amount = parseInt(document.getElementById("bet").value, 10);
    USER.balance = USER.balance + amount;
    
    document.getElementById("cash").innerHTML = USER.balance;
  }