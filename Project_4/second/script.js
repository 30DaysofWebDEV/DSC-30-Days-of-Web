var table = document.getElementById("tables");
var first = document.getElementById("first_name");
var last = document.getElementById("last_name")
var mail = document.getElementById("mail_id")
var no = document.getElementById("tel_no");
var p1 = document.getElementById("arrigato1");
var p2 = document.getElementById("arrigato2");

function addToTable(){
	var rowCount = table.rows.length;
	for(const tr of table.querySelectorAll("tbody tr")) {
		const td1 = tr.querySelector("td:nth-child(2)");
		// console.log(td1);
		//const td1 = tr.querySelector("td:nth-child(2)");

		// if(!td1) {
		// 	continue;
		// }

		if (td1.innerHTML == no.value) {
      		// console.log(`Match found for ${no}. Insert rejected`);
      		alert("Already a customer!");
      		return;
    	}
    }
	var row = table.insertRow(rowCount);
	// console.log(rowCount);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	cell1.innerHTML = first.value+" "+last.value;
	cell2.innerHTML = no.value;
	cell3.innerHTML = mail.value;
	p2.innerHTML = "Please check your mail, for further action";
	p1.innerHTML = "You have been added to our customers list";
}

var submit = document.getElementById("submit");

function add1(){
	addToTable();
}

submit.addEventListener("click", add1 );



