const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

const contactForm = document.querySelector(".contact")
const firstName = document.querySelector("#first-name")
const firstNameEmpty = document.querySelector("#first-name-empty")
const lastName = document.querySelector("#last-name")
const lastNameEmpty = document.querySelector("#last-name-empty")
const email = document.querySelector("#email")
const emailInvalid = document.querySelector("#email-invalid")
const message = document.querySelector("#message")
const messageEmpty = document.querySelector("#message-empty")
const submissionSuccess = document.querySelector("#submission-success")

const validateForm = (inputBox, errorLabel, message) => {
   if(inputBox.value.trim() === "") {
errorLabel.textContent = message;
    return false;
   }else{
errorLabel.textContent = "";
    return true;
   }
}

const validateEmail = () =>{
    if(email.value.trim() === "") {
    emailInvalid.textContent = "Email is required.";
    return false;
   }
   if(!email.value.includes("@")){
    emailInvalid.textContent = "Email is invalid.";
    return false;
   }

   emailInvalid.textContent = "";
   return true;
}

contactForm.addEventListener("submit", (event) => { 
    event.preventDefault();
    const isFirstNameValid =validateForm(firstName,firstNameEmpty,"First Name is required.");
    const isLastNameValid = validateForm(lastName,lastNameEmpty,"Last Name is required.");
    const isMessageValid = validateForm(message,messageEmpty,"Message is required.");
    const isEmailValid = validateEmail();
    
    if(isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
        submissionSuccess.textContent = "Successful!";
        contactForm.reset();
    }else{
        submissionSuccess.textContent = "";
    }

});

