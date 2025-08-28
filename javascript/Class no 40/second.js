import { PostData, username, age } from './first.js';

// Wait for data from the async function
const data = await PostData();
console.log(data);

// Insert username into DOM
const userDiv = document.getElementById('username');
userDiv.innerHTML = `<h1>Username: ${username}</h1>`;

// Insert age into DOM
const ageDiv = document.getElementById('age');
ageDiv.innerHTML = `<h1>Age: ${age}</h1>`;
