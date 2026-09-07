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

const validateInput = (inputField, errorField, errorMessage) => {
  if (inputField.value.trim() === "") {
    errorField.textContent = errorMessage;
    return false;
  }else {
    errorField.textContent = "";
    return true;
    }
};



contactForm.addEventListener("submit", (event) => { 
if(firstName.value.trim() === "") {
    event.preventDefault();
    validateInput(firstName, firstNameEmpty, "Field is required.");
}
});



contactForm.addEventListener("submit", (event) => { 
if(lastName.value.trim() === "") {
    event.preventDefault();
    validateInput(lastName, lastNameEmpty, "Field is required.");
}
});

