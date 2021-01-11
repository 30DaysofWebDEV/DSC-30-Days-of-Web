showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let title = document.getElementById('title');
    let textarea = document.getElementById("textarea");
    if (textarea.value != "" && title.value != "") {
        let notes = localStorage.getItem("notes");
        let notesTitle = localStorage.getItem("notesTitle");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        let myObj = {
            title: title.value,
            text: textarea.value,
            color: 0
        };
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        textarea.value = "";
        title.value = "";

        showNotes();
    }
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesTitle = localStorage.getItem("notesTitle");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let card = "";
    Array.from(notesObj).forEach(function (element, index) {
        let color = "white";
        let button = "Mark";
        if (element.color == 1) {
            color = "coral";
            button = "UnMark";
        }
        card += `<div class="noteCards card my-2 mx-2" style="width: 18rem; background-color: ${color}">
                 <div class="card-body">
                    <h4 class="font-weight-bold card-title">${element.title}</h4>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" class="btn btn-sm btn-primary" onclick="noteDelete(this.id)">Delete Note</button>
                    <button id="${index}" class="btn btn-sm btn-danger" onclick="markImp(this.id)">${button}</button>
                </div>
            </div>`;
    });

    let notesElement = document.getElementById("card");
    if (notesObj.length != 0) {
        notesElement.innerHTML = card;
    } else {
        notesElement.innerHTML = `<h5><span class="badge badge-danger">Nothing to show! Please Add Note</span></h5>`;
    }
}

function noteDelete(index) {
    let notes = localStorage.getItem("notes");
    if (notes != null) {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

    search.value = "";

}

function markImp(index) {
    let notes = localStorage.getItem("notes");
    if (notes != null) {
        notesObj = JSON.parse(notes);
    }
    Array.from(notesObj).forEach(function (element, id) {
        if (index == id) {
            if (element.color == 1) {
                element.color = 0;
            } else {
                element.color = 1;
            }
        }
    });

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

