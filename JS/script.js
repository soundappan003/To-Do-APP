const taskInput= document.getElementById('taskInput');
const taskList= document.getElementById('tasklist');


function addTask(){
    const tasktext=taskInput.value.trim();

    if(tasktext==="") return;

    const li=document.createElement("li");
    li.innerHTML=`<span>${tasktext}</span>
                  <button onclick="doneTask(this)">Done</button>
                  <button onclick="editTask(this)">Edit</button>
                  <button onclick="deleteTask(this)">Delete</button`;
   taskList.appendChild(li); 
   taskInput.value=""; 
   
   
 
   



}
  //function for doneTask:

  function doneTask(button){
    const task=button.parentElement;
    task.classList.toggle("completed");
    
   }
   function deleteTask(button){
    const task=button.parentElement;
    task.remove();
   }
   function editTask(button){
    const task=button.parentElement;
    const span=task.querySelector("span");
    const newText=prompt("Edit task:",span.innerText);
    span.innerText=newText;


   }