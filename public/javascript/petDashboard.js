async function addPetHandler(event) {

}

async function editPetHandler(event) {

}

async function deletePetHandler(event) {
    event.preventDefault();

    const id = 1;
    const response = await fetch(`/api/pet/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/petDashboard/');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('#addPet').addEventListener('click', addPetHandler);
document.querySelector('#editPet').addEventListener('click', editPetHandler);
document.querySelector('#deletePet').addEventListener('click', deletePetHandler);