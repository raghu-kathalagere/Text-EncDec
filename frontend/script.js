const messageInput = document.getElementById('message');
const shiftInput = document.getElementById('shift');
const resultDisplay = document.getElementById('result');

document.getElementById('encryptBtn').addEventListener('click', () => {
  sendRequest('encrypt');
});
document.getElementById('decryptBtn').addEventListener('click', () => {
  sendRequest('decrypt');
});

function sendRequest(mode) {
  const message = messageInput.value;
  const shift = parseInt(shiftInput.value);

  fetch(`http://localhost:5000/${mode}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, shift })
  })
  .then(res => res.json())
  .then(data => {
    resultDisplay.textContent = data.result;
  })
  .catch(err => {
    resultDisplay.textContent = 'Error: ' + err.message;
  });
}