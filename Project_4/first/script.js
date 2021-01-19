document.querySelector("h1").classList.add("coolTitle");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");

function isLength(){
	return input.value.length > 0;
}

//adding elements to the list
function addToList(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value="";

	// adding the close button to the list
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	span.addEventListener('click', function(e){
		ul.removeChild(li);
	})
}

//crossing off the list
var ul = document.querySelector("ul");
ul.addEventListener("click", removeItem);
function removeItem(event){
	if(event.target.tagName==="LI"){
		event.target.classList.toggle("done");
	}
}

//adding by clicking
function addToListAfterClick() {
	if(isLength()){
		addToList();
	}
	
}

//adding by keypress
function addToListAfterKeyPress(event) {
	if(isLength() && event.keyCode === 13) {
		addToList();
	}
}


button.addEventListener("click", addToListAfterClick );

input.addEventListener("keypress", addToListAfterKeyPress );

