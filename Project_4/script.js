let addToDoButton = document.getElementById('addbtn');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('task_input');


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText =task_input.value;
    if(task_input.value == ""){
        alert("Write something to add!!!");
    }
    else{
        toDoContainer.appendChild(paragraph);
    }
    task_input.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})