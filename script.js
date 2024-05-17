function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") {
        alert("Create a todo!");
        return;
    }
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    const label = document.createElement("label");
    label.appendChild(document.createTextNode(taskInput));
    label.className = "task-label";

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.style.display = "none";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-button";
    editBtn.appendChild(document.createTextNode("Edit"));
    editBtn.addEventListener("click", function() {
        if (editInput.style.display === "none") {
            editInput.value = label.innerText;
            label.style.display = "none";
            editInput.style.display = "block";
            editInput.focus();
            editBtn.textContent = "Add todo";
        } else {
            label.innerText = editInput.value;
            label.style.display = "block";
            editInput.style.display = "none";
            editBtn.textContent = "Edit";
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
}