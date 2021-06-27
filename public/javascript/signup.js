async function signupFormHandler(event) {
  event.preventDefault();

    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const zipcode = document.querySelector('#zipcode-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
   
    if (first_name && last_name && email && phone && zipcode && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          phone,
          zipcode,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
        alert(response.statusText);
      
    }
  }


  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);