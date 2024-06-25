
const inputField = document.getElementById("input");
const countBtn = document.getElementById("count-btn");
const resultPara = document.getElementById("result");

countBtn.addEventListener("click", () => {
  const inputString = inputField.value;
  const count = countMethod(inputString);
  resultPara.textContent = `The string "${inputString}" has ${count} occurrences of the letter "a".`;
});

function countMethod(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count++;
    }
  }
  return count;
}