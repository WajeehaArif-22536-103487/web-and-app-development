import { getFullName, getUsers } from './second.js';

// Show full name
const output = document.getElementById('output');
output.innerHTML = `<p>Full Name: ${getFullName()}</p>`;

// Show users
const userContainer = document.getElementById('user-container');
const userList = document.createElement('ul');

getUsers().then(users => {
  users.slice(0, 5).forEach(user => { // display first 5 users
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
  userContainer.appendChild(userList);
});
