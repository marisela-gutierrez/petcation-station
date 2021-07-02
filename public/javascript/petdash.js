async function addpethandler(event) {
    event.preventDefault();

    document.location.replace('/addpet');
}

async function editPetHandler(id) {
    document.location.replace(`/editpet/${id}`);
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


document.querySelector('#addPet').addEventListener('click', addpethandler);