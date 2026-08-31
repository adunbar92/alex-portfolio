const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

const contactForm = document.querySelector(".contact")
const firstName = document.querySelector("#first-name")
const firstNameEmpty = document.querySelector("#first-name-empty")

contactForm.addEventListener("submit", (event) => { 
if(firstName.value === "") {
    event.preventDefault();
    firstNameEmpty.classList.add("show-error");
}
});

firstName.addEventListener("input", () => {
firstNameEmpty.classList.remove("show-error");

});

const lastName = document.querySelector("#last-name")
const lastNameEmpty = document.querySelector("#last-name-empty")

contactForm.addEventListener("submit", (event) => { 
if(lastName.value === "") {
    event.preventDefault();
    lastNameEmpty.classList.add("show-error");
}
});

lastName.addEventListener("input", () => {
lastNameEmpty.classList.remove("show-error");

});

const email = document.querySelector("#email")
const emailInvalid = document.querySelector("#email-invalid")

contactForm.addEventListener("submit", (event) => { 
if(email.value === "") {
    event.preventDefault();
    emailInvalid.classList.add("show-error");
}
});

email.addEventListener("input", () => {
emailInvalid.classList.remove("show-error");

});

const message = document.querySelector("#message")
const messageEmpty = document.querySelector("#message-empty")

contactForm.addEventListener("submit", (event) => { 
if(message.value === "") {
    event.preventDefault();
    messageEmpty.classList.add("show-error");
}
});

message.addEventListener("input", () => {
messageEmpty.classList.remove("show-error");

});