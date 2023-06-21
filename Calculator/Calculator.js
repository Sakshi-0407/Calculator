let result = document.getElementById('result');
let audio = new Audio('ting.mp3'); // Replace 'ting.mp3' with the path to your sound file

function appendNumber(number) {
  result.value += number;
  playSound();
}

function appendOperator(operator) {
  result.value += operator;
  playSound();
}

function calculateResult() {
  let expression = result.value;
  if (expression) {
    result.value = eval(expression);
  }
  playSound();
}

function clearResult() {
  result.value = '';
  playSound();
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
  playSound();
}

function playSound() {
  audio.play();
}
