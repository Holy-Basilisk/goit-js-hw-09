const formData = {
    email: "",
    message: ""
}

const form = document.querySelector('.feedback-form');

if (localStorage.getItem("formData")) {
    formData.email = JSON.parse(localStorage.getItem("formData")).email;
    form.email.value = formData.email;
    formData.message = JSON.parse(localStorage.getItem("formData")).message;
    form.message.value = formData.message;    
}

form.addEventListener('input', saveText);
form.addEventListener("submit", event => {    
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    event.preventDefault();
    if (email === '' || message === '') {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        formData.email = '';
        formData.message = '';
        localStorage.removeItem("formData");
        form.reset();
    }
})

function saveText (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("formData", JSON.stringify(formData));
}

