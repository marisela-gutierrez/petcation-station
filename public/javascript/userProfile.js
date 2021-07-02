async function deleteAccountHandler(event) {
    event.preventDefault();
   
    const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

async function editProfileHandler(event) {
    event.preventDefault();
    let userInfo = document.getElementById("user-info");
    
}

document.querySelector('#editProfile').addEventListener('click', editProfileHandler);
document.querySelector('#deleteAccount').addEventListener('click', deleteAccountHandler);