console.log('welcome to user app. This is app.js');
showUser();
let submit = document.getElementById('submit');
submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log('click submit btn')
    let givenName = document.getElementById("name");
    let givenEmail = document.getElementById("email");
    let givenPhone = document.getElementById("phone");
    let givenMessage = document.getElementById("message");
    let userdetails = localStorage.getItem("userdetails");
    if (userdetails == null) {
        userObj = [];

    } else {
        userObj = JSON.parse(userdetails);
    }
    let myObj={
    name: givenName.value,
    email: givenEmail.value,
    phone: givenPhone.value,
    message: givenMessage.value,
    }
    userObj.push(myObj);
    localStorage.setItem("userdetails", JSON.stringify(userObj));
    givenName.value = "";
    givenEmail.value = "";
    givenPhone.value = "";
    givenMessage.value = "";
   
    showUser();
});


function showUser() {
    let userdetails = localStorage.getItem("userdetails");
    if (userdetails == null) {
        userObj = [];

    } else {
        userObj = JSON.parse(userdetails);
    }
    let html = "";
    userObj.forEach(function (element, index) {
        html += `<tr>
        <th>${element.name}</th>
        <th>${element.email}</th>
        <th>${element.phone}</th>
        <th>${element.message}</th>  
      </tr>`;

    });
    let contactInfo = document.getElementById('contactInfo');
    if (userObj.length != 0) {
        contactInfo.innerHTML = html;
    }else{
        contactInfo.innerHTML=`There is no user`;
    }
}



