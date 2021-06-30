async function signupFormHandler(event) {
  event.preventDefault();

    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const zipcode = document.querySelector('#zipcode-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#password-confirm').value.trim();
    let passwordMatch = false;
    if(password == confirmPassword){
      passwordMatch = true;
    }
    if(passwordMatch){
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
      
    }else {
      alert("The fields can not be empty.");
    }
    } else {
      alert("The password fields didn't match.")
    }
  }

  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
console.log(email, password);

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);