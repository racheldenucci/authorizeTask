let addTaskBtn = document.getElementById("new-task-btn")


addTaskBtn.addEventListener("click", function(){
    
    let popup = document.getElementById("popup");
    popup.classList.toggle("show");
})