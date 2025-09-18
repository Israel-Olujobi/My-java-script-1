function addTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    //.trim() ensures that the task text is not just whitespace

    if (taskText !==""){
        const ul = document.getElementById("todoList");

        //Create new list item
        const li = document.createElement("li");

        //Create task text element (span)
        const span = document.createElement("span");
        span.textContent=taskText;

        //Create edit button
        const editButton = document.createElement("button");
        editButton.textContent="Edit";
        editButton.onclick=()=>editTask(span);

        //Function to edit task, prompt to enter new task, span.textContext is default value in prompt)
        function editTask(span){
            const newTask=prompt("Edit your task", span.textContent)
            
            //Update task only if the input is not null or empty
            if (newTask !==null && newTask.trim() !==""){
                span.textContent= newTask.trim();
            }
        }

        //Create delete button
        const removeButton = document.createElement("button");
        removeButton.textContent="Delete";
        removeButton.onclick=()=>removeTask(li);

        //Function to remove a task from to do list
        function removeTask(li){
            const ul = document.getElementById("todoList");  //Get the list
            ul.removeChild(li);  //Remove specified task element
        }

        //Append buttons and text to the list item
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        //Append unordered list item to the list
        ul.appendChild(li);
        
        //Clear the input field
        input.value = "";
    }
    else{
        alert("Please enter a valid task");
    }
}