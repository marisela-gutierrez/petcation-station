async function sitterSignupFormHandler(event) {
    event.preventDefault();

    const hosting_preference = document.querySelector('#hosting-signup').value.trim();
    const bio = document.querySelector('#bio-signup').value.trim();
    const socials = document.querySelector('#socials-signup').value.trim();
    const contact = document.querySelector('#contact-signup').value.trim();
    const pet_skills = document.querySelector('#petSkills-signup').value.trim();
    const price_per_day = document.querySelector('#price-signup').value.trim();
    const availability = document.querySelector('#availability-signup').value.trim();
    const neutered = document.querySelector('#meutered-signup');

    if (neutered === 'true') {
        neutering = true;
    } else {
        neutering = false;
    }

    if (hosting_preference && bio && socials && contact && pet_skills && price_per_day && availability) {
        const response = await fetch('/api/petSitterss', {
            method: 'post',
            body: JSON.stringify({
                hosting_preference,
                bio,
                socials,
                contact,
                pet_skills,
                price_per_day,
                neutering,
                availability
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        alert(response.statusText);
        document.location.replace('/dashboard');
    } else {
        alert("The fields can not be empty.");
    }
}

document.querySelector('.sitterSignup-form').addEventListener('submit', sitterSignupFormHandler);