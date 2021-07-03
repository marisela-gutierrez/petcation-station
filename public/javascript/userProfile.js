
async function deleteAccountHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/');
        alert(response.statusText);
    } else {
        alert(response.statusText);
    }
}

function editProfileHandler(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").innerHTML;
    let lastName = document.getElementById("last-name").innerHTML;
    let email= document.getElementById("email").innerHTML;
    let phone = document.getElementById("phone").innerHTML;
    let zipcode = document.getElementById("zipcode").innerHTML;

    let arrayInfo = [
        {
            value: firstName,
            label: 'First Name'
        },
        {
            value: lastName,
            label: 'Last name'
        },
        {
            value: email,
            label: 'email',
        },
        {
            value: phone,
            label: 'Phone Number'
        },
        {
            value: zipcode,
            label: 'Zipcode'
        }
    ];
    let currentInfo = document.getElementById("user-info");
    let form = document.createElement('form');
    let newDiv = document.createElement('div');
    newDiv.classList.add('col');
    newDiv.classList.add('text-right');
    newDiv.id = 'user-info';
    for(let i = 0; i < arrayInfo.length; i++){
        let div = document.createElement('div');
        div.classList.add('form-group');
        let input = document.createElement('input');
        let label = document.createElement('label');
        label.for = i+1;
        label.innerHTML = arrayInfo[i].label;
        input.classList.add('form-control');
        input.placeholder = arrayInfo[i].value;
        input.id = i+1;
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    }

    let submit = document.createElement('button');
    submit.type = 'button';
    submit.classList.add('btn');
    submit.classList.add('btn-primary');
    submit.classList.add('mt-3');
    submit.id = 'submit-changes';
    submit.innerHTML = 'Submit';
    form.appendChild(submit);
    newDiv.appendChild(form);
    let parent = currentInfo.parentNode;
    parent.replaceChild(newDiv, currentInfo);

    const newForm = document.getElementById('user-info');
    newForm.addEventListener('click', updateProfileHandler);
    
  
}

async function updateProfileHandler(event){
    event.preventDefault();
    console.log(event.target.id);
    if(event.target.id === 'submit-changes'){
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    let first_name = document.getElementById('1').value.trim();
    if(!first_name){
        first_name = document.getElementById('1').placeholder;
    }
    let last_name = document.getElementById('2').value.trim();
    if(!last_name){
        last_name = document.getElementById('2').placeholder;
    }
    let email = document.getElementById('3').value.trim();
    if(!email){
        email = document.getElementById('3').placeholder;
    }
    let phone = document.getElementById('4').value.trim();
    if(!phone){
        phone = document.getElementById('4').placeholder;
    }
    let zipcode = document.getElementById('5').value.trim();
    if(!zipcode){
        zipcode = document.getElementById('5').placeholder;
    }

    let response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
            zipcode
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    });
    if (response.ok) {
        document.location.reload();
        alert(response.statusText);
    } else {
        alert(response.statusText);
    }
}
}


document.querySelector('#editProfile').addEventListener('click', editProfileHandler);
document.querySelector('#deleteAccount').addEventListener('click', deleteAccountHandler);
