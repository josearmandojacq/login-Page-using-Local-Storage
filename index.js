var nextButton = document.getElementById('inputButton');
var inputName = document.getElementById('inputName');


if (localStorage.getItem('name') && parseInt(localStorage.getItem('clicked')) === 0) {
  inputName.value = localStorage.getItem('name');
  document.location.href = 'skills.html';
}

console.log(localStorage);

nextButton.addEventListener('click', gettingTheInfo);

function gettingTheInfo() {
  if (inputName.value.trim() === '' || inputName.value.trim() === undefined) {
    alert('You did not put a correct name');
  }else {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('visited', 1);
    document.location.href = 'skills.html';
    localStorage.setItem('clicked', 0);
  }
}
