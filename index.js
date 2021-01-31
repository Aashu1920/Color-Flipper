const colors = [
  "green ",
  "yellow",
  "#000080",
  "brown",
  "#808000",
  "#A52A2A",
  "#808080",
  "#0000A0",
  "#3B3131",
  "coral",
  "orange",
  "#FFF8C6",
  '#F87217',
  '#7D0552',
  '#FDD7E4',
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRendomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];

  color.textContent = colors[randomNumber];
});

function getRendomNumber() {
  return Math.floor(Math.random() * colors.length);
}
