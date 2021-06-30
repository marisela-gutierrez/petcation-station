async function ownerSignupFormHandler(event) {
    event.preventDefault();

    const hosting_preference = document.querySelector('#hosting-signup').value.trim();
    const bio = document.querySelector('#bio-signup').value.trim();
    const socials = document.querySelector('#socials-signup').value.trim();
    const contact = document.querySelector('#contact-signup').value.trim();


    if (hosting_preference && bio && socials && contact) {
        const response = await fetch('/api/petOwners', {
            method: 'post',
            body: JSON.stringify({
                hosting_preference,
                bio,
                socials,
                contact
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        alert(response.statusText);
        document.location.replace('/dashboard');
    } else {
        alert("The fields can not be empty.");
    }
}

document.querySelector('.ownerSignup-form').addEventListener('submit', ownerSignupFormHandler);