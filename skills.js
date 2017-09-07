var welcomeMessage = document.querySelector('h1');
var inputSkills = document.getElementById('inputSkills');
var skillsArray = ['HTML', 'CSS', 'JAVASCRIPT'];
var addButton = document.getElementById('addButton');
var skillsList = document.getElementById('skillsList');
var timeClicked = 1;
var hiperlink = document.querySelector('a');

welcomeMessage.innerHTML = 'Hello ' + localStorage.getItem('name');

for (var i = 1; i <= parseInt(localStorage.getItem('counter')); i++) {
  if (localStorage.getItem('skills' + i)) {
    var li = document.createElement('li');
    li.textContent = localStorage.getItem('skills' + i);
    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'X';
    li.appendChild(deleteButton);
    skillsList.appendChild(li);
    deleteButton.addEventListener('click', removeSkillsElements);
  }
}

hiperlink.addEventListener('click', function () {
  document.location.replace('index.html');
  localStorage.setItem('clicked', 1);
  localStorage.clear();
});

for (var i = 0; i < skillsArray.length; i++) {
  var option = document.createElement('option');
  option.text = skillsArray[i];
  option.value = skillsArray[i];
  inputSkills.appendChild(option);
}

addButton.addEventListener('click', showSkillsList);

function showSkillsList() {

  localStorage.setItem('skills' + timeClicked, inputSkills.value);
  localStorage.setItem('counter', timeClicked);
  timeClicked++;
  var li = document.createElement('li');
  li.textContent = inputSkills.value;
  var deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.textContent = 'X';
  li.appendChild(deleteButton);
  skillsList.appendChild(li);
  deleteButton.addEventListener('click', removeSkillsElements);
}

function removeSkillsElements() {

  skillsList.removeChild(this.parentNode);

}

console.log(localStorage);
