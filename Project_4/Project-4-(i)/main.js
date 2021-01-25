//Adding delete and done buttons to the existing to-dos

var list_of_existing_to_dos = document.getElementsByTagName("LI");

for (let i = 0; i < list_of_existing_to_dos.length; i++) 
{
    var done_button = document.createElement('button');
    done_button.innerHTML = '<i class="fa fa-circle-o fa-2x" aria-hidden="true"></i>';
    done_button.classList.add('done-button');
	list_of_existing_to_dos[i].appendChild(done_button);

    var delete_button = document.createElement('button');
    delete_button.innerHTML = '<i class="fa fa-trash fa-2x" aria-hidden="true"></i>';
    delete_button.classList.add('delete-button');
    list_of_existing_to_dos[i].appendChild(delete_button);
}


//Adding functionality to 

var delete_buttons = document.getElementsByClassName('delete-button');

for (let i = 0; i < delete_buttons.length; i++) {
	
	  delete_buttons[i].addEventListener('click', function() {
			this.parentElement.remove();
	});
}

var done_buttons = document.getElementsByClassName('done-button');

for (let i = 0; i < done_buttons.length; i++) {
	
	  done_buttons[i].addEventListener('click', function(e) {
		e.target.classList.remove('fa-circle-o');
		e.target.classList.add('fa-check-circle');
        this.parentElement.classList.add("completed-to-do");		
	});
}



//Adding new to-dos to the existing todo list

function add_new_to_do()
{
	var to_do_list=document.getElementById('List-of-todos');
	var input=document.getElementById('add-input');
	
	var new_to_do=document.createElement('li');

    if(input.value === "")
	{
        alert("Please enter a valid to-do!!");
    }
	
	else
	{
		new_to_do.innerText = input.value;
		
		var done_button = document.createElement('button');
		done_button.innerHTML = '<i class="fa fa-circle-o fa-2x" aria-hidden="true"></i>';
		done_button.classList.add('done-button');
		new_to_do.appendChild(done_button);
		done_button.addEventListener('click', function(e) {
		e.target.classList.remove('fa-circle-o');
		e.target.classList.add('fa-check-circle');
        this.parentElement.classList.add("completed-to-do");		
		});

		var delete_button = document.createElement('button');
		delete_button.innerHTML = '<i class="fa fa-trash fa-2x" aria-hidden="true"></i>';
		delete_button.classList.add('delete-button');
		new_to_do.appendChild(delete_button);
		delete_button.addEventListener('click', function() {
			this.parentElement.remove();
		});
		
		to_do_list.appendChild(new_to_do);
	}
   
    input.value = "";
}




