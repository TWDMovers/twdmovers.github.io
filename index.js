const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('Name');
  const emailInput = document.getElementById("Email");
  const phoneInput = document.getElementById('Phone_Number');
  const messageInput = document.getElementById('message');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  firstNameInput.value = '';
  emailInput.value='';
  phoneInput.value='';
  messageInput.value='';
});