// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
let count = 0, percentageValue;
//console.log(myNodelist);

for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        if (ev.target.classList.value == "checked")
            count++;
        else
            count--;
        fractionValue = count/myNodelist.length
        // console.log(percentageValue);
        updateProgressBar(fractionValue);
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(event) {
    event.preventDefault();
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Updating progress bar
function updateProgressBar(value) {
    percentageValue = Math.round(value*100);
    document.querySelector(".progress__fill").style.width = `${percentageValue}%`;
    document.querySelector(".progress__text").textContent = `${percentageValue}%`;
}