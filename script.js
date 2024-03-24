/*document.getElementById('check-btn').addEventListener('click', checkPalindrome);

document.getElementById('text-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkPalindrome();
  }
});

function checkPalindrome() {
  const inputValue = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (inputValue === '') {
    alert('Please input a value');
  } else {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInputValue = inputValue.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedValue = cleanInputValue.split('').reverse().join('');

    if (reversedValue === cleanInputValue) {
      resultElement.textContent = inputValue + ' is a palindrome';
    } else {
      resultElement.textContent = inputValue + ' is not a palindrome';
    }
  }
}*/







 const checkButton = document.getElementById('check-btn');
 const inputValue = document.getElementById('text-input');

function palindrome(){
  const inputValueText =inputValue.value.trim();
  const resultElement = document.getElementById('result');

  if (inputValueText === '') {
    alert('Please input a value');
  } else {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInputValue = inputValueText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedValue = cleanInputValue.split('').reverse().join('');

    if (reversedValue === cleanInputValue) {
      resultElement.textContent = inputValueText + ' is a palindrome';
    } else {
      resultElement.textContent = inputValueText + ' is not a palindrome';
    }
  }
}


function enter(event){
  if (event.key === 'Enter') {
   palindrome();
  }
}

checkButton.addEventListener('click', palindrome);
inputValue.addEventListener('keydown', enter);  

