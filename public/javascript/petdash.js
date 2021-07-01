async function addpethandler(event) {
    event.preventDefault();

    document.location.replace('/addpet');
}

document.querySelector('#addPet').addEventListener('click', addpethandler);