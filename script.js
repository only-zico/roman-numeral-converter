const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const form = document.getElementById("form");

//roman converter math
function convertToRoman(num) {
const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV:4,
  I: 1
};

let roman = ""
for (let i in numerals) {
  while(num >= numerals[i]){
    roman += i;
    num -= numerals[i];
  }
}
return roman;
};

//message alerts!
const numberError = () => {
  alert = ''
if(numberInput.value === ""){
alert = "Please enter a valid number";
}else if (numberInput.value < 1) {
alert = "Please enter a number greater than or equal to 1";
}else if (numberInput.value > 3999){
alert ="Please enter a number less than or equal to 3999";
}else{
  return true;
}

outputDiv.innerText = alert;
  outputDiv.classList.add('alert');

  return false;
};

const clearOutput = () => {
  outputDiv.innerText = '';
  outputDiv.classList.remove('alert');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  updateUI();
});

convertBtn.addEventListener('click', () => {
  updateUI();
});

const updateUI = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  outputDiv.classList.remove('hidden');

  clearOutput();

  if (numberError()) {
    outputDiv.innerText = convertToRoman(int);
  }
};
