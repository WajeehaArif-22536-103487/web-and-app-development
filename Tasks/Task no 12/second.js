import { firstName, lastName } from './first.js';

export function getFullName() {
  return `${firstName} ${lastName}`;
}

export async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}
