function myFunction() {
  var lst = document.createElement("li");
  var inputValue = document.getElementById("Inputfn").value;
  var t = document.createTextNode(inputValue);
  lst.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("listfn").appendChild(lst);
  }
  document.getElementById("Inputfn").value = "";
}