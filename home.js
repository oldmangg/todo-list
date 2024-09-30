document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const priority = document.getElementById("priority").value;

        if (title && description) {
            const taskItem = createTaskItem(title, description, priority);
            taskList.appendChild(taskItem);

            taskForm.reset();
        }
    });

    function createTaskItem(title, description, priority) {
        const li = document.createElement("li");
        li.className = `task-item ${priority.toLowerCase()}`;

        const taskContent = `
            <h3>${title}</h3>
            <p>${description}</p>
            <span class="priority">Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
            <br></br>
            <br><button class="delete-btn">Delete</button></br>
        `;
        li.innerHTML = taskContent;

        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        return li;
    }
});
