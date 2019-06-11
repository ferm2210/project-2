const skyblue = document.getElementById("skyblue");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

const hide = () => {
  btnStart.classList.add("hide");
};

btnStart.addEventListener("click", hide);

const randomNumbers = amount =>
  new Array(amount).fill(0).map(n => Math.floor(Math.random() * 4));

const numberToColor = number => {
  switch (number) {
    case 0:
      return skyblue;
    case 1:
      return violet;
    case 2:
      return orange;
    case 3:
      return green;
  }
};

const colorToNumber = color => {
  switch (color) {
    case "skyblue":
      return 0;
    case "violet":
      return 1;
    case "orange":
      return 2;
    case "green":
      return 3;
  }
};

const enlighten = id => {
  id.classList.add("light");
  setTimeout(() => {
    id.classList.remove("light");
  }, 500);
};

document.body.addEventListener("click", enlighten);

const randomPatronColor = levels => {
  let a = randomNumbers(levels);
  a.forEach((element, index) => {
    setTimeout(() => {
      enlighten(numberToColor(element));
    }, 1000 * index);
  });
};
