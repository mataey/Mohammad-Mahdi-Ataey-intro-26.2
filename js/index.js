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
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name, email, message);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>wrote: ${message}</span> `;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function(){
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    messageForm.reset();
});