const addTaskBtn = document.getElementById("new-task-btn");
const saveTask = document.getElementById("save-task");
const cancelTask = document.getElementById("cancel-task");
const popup = document.getElementById("popup");

function closePopup(){
    popup.classList.toggle("show");
}

addTaskBtn.addEventListener("click", function(){    
    closePopup();
})

saveTask.addEventListener("click", function(){
    closePopup();

    //submit to database
})

cancelTask.addEventListener("click", function(){
    closePopup();
})