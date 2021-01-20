var selectedRow = null

function onFormSubmit() {
   
    if (validate()) {
        
        var formData = readFormData();
        alert("success")
        if (selectedRow == null)
            insertNewRecord(formData);
            
        else
            updateRecord(formData);
        resetForm();
    }
    if ( document.getElementById("area").value == table) {
        alert("exist")
        
    }
    
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["email"] = document.getElementById("email").value;
    formData["pnnum"] = document.getElementById("pnnum").value;
    formData["area"] = document.getElementById("area").value;
    
    return formData;
  
}


         
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pnnum;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.area;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = Date() ;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = '<a onClick="onDelete(this)">Delete</a>';
         
}


function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pnnum").value = "";
    document.getElementById("area").value = "";
    selectedRow = null;
}



function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("title").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    
    return isValid;
    
}