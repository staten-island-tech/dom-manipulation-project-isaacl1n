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

    DOMSelectors.

    // const taskCard = document.createElement("div");
    // taskCard.classList.add("task-card");
    // taskCard.innerHTML = `
    //     <h2 class="task-name">${taskName}</h2>
    //     <p class="task-desc">${taskDesc}</p>
    //     <h4 class="due-date">Due: ${formattedDueDate}</h4>
    //     <button type="button" class="remove-button">I'm finished with this task.</button>
    // `;
    // DOMSelectors.taskList.appendChild(taskCard);

    clear();

    const removeButton = taskCard.querySelector(".remove-button");
    removeButton.addEventListener("click", function() {
        taskCard.remove();
    });
});