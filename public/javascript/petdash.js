async function addpethandler(event) {
    event.preventDefault();

    document.location.replace('/addpet');
}

async function editPetHandler(event) {
    event.preventDefault();

    document.location.replace('/addpet');
}

async function deletePetHandler(id) {

    const response = await fetch(`/api/pets/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}


document.querySelector('#editPet').addEventListener('click', editPetHandler);
document.querySelector('#addPet').addEventListener('click', addpethandler);