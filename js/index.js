const today = new Date();
const thisYear = today.getFullYear();
const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);

const copyright = document.createElement('p');
copyright.innerHTML = `Mohammad Mahdi Ataey &copy; ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML','CSS','JavaScript','Git','Github','Flexbox'];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for(let i = 0 ; i < skills.length; i++){
    const skill = document.createElement('li');

    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}