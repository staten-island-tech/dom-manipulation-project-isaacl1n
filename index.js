console.log("connected")

const DOMSelectors = {
    form: document.querySelector("#form"),
    taskName: document.getElementById("task-name"),
    taskDescription: document.getElementById("task-desc"),
    dueDate: document.getElementById("due-date"),
    submitButton: document.querySelector("#submit-button"),
    taskList: document.querySelector("#tasks")
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.taskName.value);
});