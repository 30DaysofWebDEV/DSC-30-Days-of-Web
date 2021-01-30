var addToDoButton=document.getElementById("addBtn");
var toDoContainer=document.getElementById('todocontainer');
var inputField=document.getElementById("input_task");

addToDoButton.addEventListener('click', function(){
    var paragraph=document.createElement('p');
    paragraph.innerText=input_task.value;
    if(input_task.value==""){
        alert("enter your task!!");
    }
    toDoContainer.appendChild(paragraph);
    input_task.value="";
})