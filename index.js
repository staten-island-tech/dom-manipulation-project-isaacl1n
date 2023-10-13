console.log("connected")

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
});