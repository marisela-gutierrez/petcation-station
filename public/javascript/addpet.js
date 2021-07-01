async function addPetFormHandler(event) {
    event.preventDefault();

    const pet_name = document.querySelector('#name-pet').value.trim();
    const age = document.querySelector('#age-pet').value.trim();
    const species = document.querySelector('#species-pet').value.trim();
    const bio = document.querySelector('#bio-pet').value.trim();
    const breed = document.querySelector('#breed-pet').value.trim();
    const feeding_habits = document.querySelector('#feeding-pet').value.trim();

    const genderChoice = document.getElementsByName('gender');
    const interactive = document.querySelector('#interactive-pet').checked;
    const neutered_spayed = document.querySelector('#meutered-pet').checked;
    const potty_trained = document.querySelector('#pottyTrained-pet').checked;

    for (i = 0; i < genderChoice.length; i++) {
        if (genderChoice[i].checked)
            selectedGender = genderChoice[i].value;
    }

    if (selectedGender === 'Female') {
        gender = true;
    } else {
        gender = false;
    }

    if (pet_name && age && species && bio && breed && feeding_habits) {
        const response = await fetch('/api/pets', {
            method: 'post',
            body: JSON.stringify({
                pet_name,
                age,
                species,
                bio,
                breed,
                gender,
                interactive,
                feeding_habits,
                neutered_spayed,
                potty_trained
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        alert(response.statusText);
        document.location.replace('/petDashboard');
    } else {
        alert("The fields can not be empty.");
    }
}

document.querySelector('.addpet-form').addEventListener('submit', addPetFormHandler);