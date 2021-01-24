function formSubmitted(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('number').value;
    let name = document.getElementById('name').value;

	if (!number || !email || !password) {
		alert("Form can't be submitted empty");
	}

	else {
		alert('Form Submitted Successfully !');
	}
	 
}


const addRow = (username, lastname, email) => {
    const newRow = document.createElement('tr');
    const newData = document.createElement('td');
    const btag = document.createElement('b');
    const itag = document.createElement('i');
    itag.append(`User: ${username} ${lastname}`);
    btag.append(itag);
    newData.append(btag);
    const newMail = document.createElement('td');
    const utag = document.createElement('u');
    utag.append(`Email: ${email}`);
    newMail.append(utag);
    newRow.append(newData);
    newRow.append(newMail);
    newData.classList.toggle('border');
    newMail.classList.toggle('border');
    tableRegister.append(newRow);
}

