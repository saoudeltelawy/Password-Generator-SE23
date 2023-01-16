const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
]; //Default

// Removing Numbers
const charactersNoNumbers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
// Removing Symbols:
const charactersNoSymbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

// Page Elements:
let h1 = document.querySelector("h1");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".icon");
// let passwordImage = document.querySelector(".password-img");
let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");
let footer = document.querySelector("footer p");
let siteInfoDiv = document.querySelector("div.site-info");
let numbersInput = document.querySelector(".numbers-input");
let numberInputValue = numbersInput.value;
let select = document.getElementById("types");

// Icon to be changed after a while [Animation]
// setTimeout(() => {
//   icon.classList.toggle("fa-unlock");
// }, 4000);
function animateIcon() {
  //   icon.classList.remove("fa-unlock");
  //   icon.classList.add("fa-lock");
  icon.classList.toggle("fa-unlock");
}
setInterval(animateIcon, 2000);

// Logic
numbersInput.addEventListener("change", function (e) {
  numberInputValue = e.target.value;
  // alert(numberInputValue);
});

btn.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * characters.length);
  if (!firstInput.value && !secondInput.value) {
    getRandomPassword();
  } else if (firstInput.value && secondInput.value) {
    firstInput.value = "";
    secondInput.value = "";
    getRandomPassword();
  }
});

function getRandomPassword() {
  for (var i = 0; i < numberInputValue; i++) {
    let firstRandomNum = Math.floor(Math.random() * characters.length);
    let secondRandomNum = Math.floor(Math.random() * characters.length);
    let randomNum = Math.floor(Math.random() * characters.length);

    if (numberInputValue >= 16) {
      // alert("Shit!");
      break;
    } else {
      if (select.value === "default") {
        firstInput.value += characters[firstRandomNum];
        secondInput.value += characters[secondRandomNum];
      } else if (select.value === "no-numbers") {
        let firstRandomNumberForNoNumbersArray = Math.floor(
          Math.random() * charactersNoNumbers.length
        );
        let secondRandomNumberForNoNumbersArray = Math.floor(
          Math.random() * charactersNoNumbers.length
        );
        firstInput.value +=
          charactersNoNumbers[firstRandomNumberForNoNumbersArray];
        secondInput.value +=
          charactersNoNumbers[secondRandomNumberForNoNumbersArray];
      } else if (select.value === "no-symbols") {
        let firstRandomNumberForNoNumbersArray = Math.floor(
          Math.random() * charactersNoSymbols.length
        );
        let secondRandomNumberForNoNumbersArray = Math.floor(
          Math.random() * charactersNoSymbols.length
        );
        firstInput.value +=
          charactersNoSymbols[firstRandomNumberForNoNumbersArray];
        secondInput.value +=
          charactersNoSymbols[secondRandomNumberForNoNumbersArray];
      }
    }
  }
}
// alert(select.value);

// Filterd!!!
// const numbersOnlyArr = function filter_list_numbers_only(l) {
//   return l.filter((characters) => typeof characters === "number");
// };
// console.log(filter_list(arr));

// Copy Clipboard
firstInput.addEventListener("dblclick", handleCopyText);
// secondInput.addEventListener("dblclick", handleCopyText);
function handleCopyText() {
  const cb = navigator.clipboard;
  cb.writeText(firstInput.value).then(() => alert("Password Copied!"));
}

// firstInput.addEventListener("dblclick", () =>
//   navigator.clipboard
//     .writeText(firstInput.value)
//     .then(() => alert("Text copied"))
// );

// for (var i = 0; i < characters.length; i++) {
//   let randomNum = Math.floor(Math.random() * characters.length);

//   firstInput.value += characters[randomNum];
// }

// Dark/Light Functionality:
document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
const sun =
  "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon =
  "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );
  h1.style.color = "#1f2937";
  // passwordImage.style.visibility = "hidden";
  firstInput.style.backgroundColor = "#ffffff";
  secondInput.style.backgroundColor = "#ffffff";

  firstInput.style.color = "#273549";
  secondInput.style.color = "#273549";

  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}
function setDark() {
  root.style.setProperty("--bs-dark", "#1f2937");
  h1.style.color = "white";
  // passwordImage.style.visibility = "visible";
  firstInput.style.backgroundColor = "#273549";
  secondInput.style.backgroundColor = "#273549";
  firstInput.style.color = "#55F991";
  secondInput.style.color = "#55F991";
  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}

// Site Info Disappear after while!

setTimeout(() => {
  siteInfoDiv.style.visibility = "hidden";
}, 6000);

// Footer - Year
const date = new Date();
const year = date.getFullYear();
footer.textContent += ` - ©${year}`;
