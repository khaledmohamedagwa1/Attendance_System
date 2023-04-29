const nameRegex = /^[A-Za-z]{3,}$/;// First and last name with at least three alphabets
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/; // accepts only letters, digits, spaces, and some special characters
const ageRegex = /^(2[1-9]|[3-5][0-9]|60)$/;//accepts age from 21 to 60
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function inputValidation(input, event, regex) {

    input.addEventListener(event, function () {
        if (!regex.test(this.value)) {
            this.classList.add("is-invalid");
            this.focus();
            this.value = this.value;
            return false;
        }
        else {
            this.classList.remove("is-invalid")
            this.classList.add("is-valid");
            return true;

        }
    })
}
export{nameRegex,emailRegex,addressRegex,ageRegex ,passwordRegex,inputValidation};