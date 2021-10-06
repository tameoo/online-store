const form = document.getElementById('c-form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const data = {
      fullName: fullName.value,
      email: email.value,
      message: message.value,
   };

   postData(data).then(() => {
      clearFields();
   });
});

async function postData(data) {
   await fetch('http://localhost:8000/contacts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-type': 'application/json',
      },
   });
}

function clearFields() {
   fullName.value = '';
   email.value = '';
   message.value = '';
}
