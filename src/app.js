let password = document.querySelector("#password-field");
let strengthEasy = document.querySelector(".easy");
let strengthMedium = document.querySelector(".medium");
let strengthStrong = document.querySelector(".strong");

function setColorEasy(color) {
  strengthEasy.style.backgroundColor = color;
}

function setColorMedium(color) {
  strengthMedium.style.backgroundColor = color;
}

function setColorStrong(color) {
  strengthStrong.style.backgroundColor = color;
}

function clearStrength() {
  strengthEasy.style.backgroundColor = "";
  strengthMedium.style.backgroundColor = "";
  strengthStrong.style.backgroundColor = "";
}

password.addEventListener("keyup", checkPasswordStrength);

function checkPasswordStrength() {
  if (password.value == "") {
    clearStrength();
    return false;
  }

  if (password.value.length < 8) {
    setColorEasy("red");
    setColorMedium("red");
    setColorStrong("red");
    return false;
  } else {
    let lowerCase = password.value.match(/[a-z]/);
    let upperCase = password.value.match(/[A-Z]/);
    let digits = password.value.match(/[0-9]/);
    let symbols = password.value.match(
      /[\!\~\@\&\#\$\%\^\&\*\(\)\{\}\?\-\_\+\=]/
    );

    if (lowerCase || upperCase || digits || symbols) {
      setColorEasy("red");
      setColorMedium("gray");
      setColorStrong("gray");
    }

    if (
      (lowerCase && digits) ||
      (lowerCase && symbols) ||
      (lowerCase && upperCase && digits) ||
      (upperCase && digits) ||
      (upperCase && symbols) ||
      (lowerCase && upperCase && symbols) ||
      (digits && symbols)
    ) {
      strength = 60;
      setColorEasy("yellow");
      setColorMedium("yellow");
      setColorStrong("gray");
    }

    if (
      (lowerCase && upperCase && digits && symbols) ||
      (lowerCase && digits && symbols) ||
      (upperCase && digits && symbols)
    ) {
      setColorEasy("green");
      setColorMedium("green");
      setColorStrong("green");
    }
  }
}
