console.log("connected")

const DOMSelectors = {
    form: document.querySelector("#form"),
    taskList: document.querySelector("#tasks"),
    taskCard: document.querySelector(".task-card"),
    taskName: document.getElementById("task-name"),
    taskDescription: document.getElementById("task-desc"),
    dueDate: document.getElementById("due-date"),
}

function clear() {
    DOMSelectors.taskName.value = "";
    DOMSelectors.taskDescription.value = "";
    DOMSelectors.dueDate.value = "";
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const taskName = DOMSelectors.taskName.value;
    const taskDesc = DOMSelectors.taskDescription.value;
    const dueDateValue = DOMSelectors.dueDate.value;
        const dueDate = new Date(dueDateValue);
        const formattedDueDate = dueDate.toLocaleDateString() + ", " + dueDate.toLocaleTimeString();

    DOMSelectors.taskList.insertAdjacentHTML(
        "afterbegin",
        `
            <div class="task-card">
                <h2 class="task-name">${taskName}</h2>
                <p class="task-desc">${taskDesc}</p>
                <h4 class="due-date">Due: ${formattedDueDate}</h4>
                <button type="button" class="remove-button">I'm finished with this task.</button>
            </div>
        `
    );

    clear();

    const removeButton = document.querySelectorAll(".remove-button");
    removeButton.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            event.target.parentElement.remove();
        });
    });
});