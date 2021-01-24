//Writing code here


const formControl = document.querySelector('#formControl');
const tableRegister = document.querySelector('#Register')
let nameArray = [];


formControl.addEventListener('submit', function (Event) {
    Event.preventDefault();
    const fnameInput = formControl.elements.fname;
    const lnameInput = formControl.elements.lname;
    const emailInput = formControl.elements.email;

    // let flag = 0;
    // if (!(fnameInput.value === '' || lnameInput.value === '' || emailInput.value === '')) {
    //     flag = 1;
    // } else {
    //     alert('Please fill all inputs')
    // }
    // if (nameArray.length !== 0) {
    //     for (let name of nameArray) {
    //         let checkName = `${fnameInput.value} ${lnameInput.value}`
    //         if (checkName === name) {
    //             flag++;
    //         }
    //         if (flag) {
    //             alert("Please give a valid input.");
    //         }
    //     }
    // }
    // if (!flag) {
    // addRow(fnameInput.value, lnameInput.value, emailInput.value)
    // }


    if (!(fnameInput.value === '' || lnameInput.value === '' || emailInput.value === '')) {
        addRow(fnameInput.value, lnameInput.value, emailInput.value)
    } else {
        alert("Give valid input");
    }

    nameArray.push(`${fnameInput.value} ${lnameInput.value}`);
    fnameInput.value = '';
    lnameInput.value = '';
    emailInput.value = '';
    formControl.elements.pass.value = '';

})

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



