// Small helper for talking to our backend server.

// 10.0.2.2 is how the Android emulator reaches "localhost" on your PC.
// If you test on a REAL phone, replace this with your PC's local IP,
// for example: 'http://192.168.1.5:5000/api'
const BASE_URL = 'http://10.0.2.2:5000/api';

// The login token is kept in memory while the app is open.
// Every request sends it so the server knows who we are.
let token = '';

export function setToken(newToken: string) {
  token = newToken;
}

// Sends a request to the backend and returns the JSON response.
// If the server says something went wrong, we throw an Error
// so the screen can show the message in an alert.
export async function apiRequest(
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: object,
) {
  const response = await fetch(BASE_URL + path, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}
