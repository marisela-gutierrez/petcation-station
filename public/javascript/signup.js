UPLOADCARE_LIVE = false;
UPLOADCARE_PUBLIC_KEY = '59150aeae4413033069f';
UPLOADCARE_CLEARABLE = true;
UPLOADCARE_PREVIEW_STEP = false;

const widget = uploadcare.SingleWidget("[role=uploadcare-uploader]");

// listen to the "upload completed" event
widget.onUploadComplete(fileInfo => {
  // get a CDN URL from the file info
  console.log(fileInfo.cdnUrl);
});

async function signupFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const zipcode = document.querySelector('#zipcode-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const uuid = '';
  
    if (first_name && last_name && email && phone && zipcode && password && uuid) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          phone,
          zipcode,
          password,
          UUID
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
        alert(response.statusText);
      
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);