var value = 0;
var checkbox1 = document.getElementById("flexSwitchCheckDefault")
checkbox1.checked = value
document.getElementById("flexSwitchCheckDefault").addEventListener("change", function (element) {
    if (checkbox1.checked == 1) {
        var all = document.getElementsByClassName('bodydata');
        for (var i = 0; i < all.length; i++) {
            all[i].style = 'background:black;color:white;';
        }
    } else {
        var all = document.getElementsByClassName('bodydata');
        for (var i = 0; i < all.length; i++) {
            all[i].style = '';
        }
    }
});



var firebaseConfig = {
    apiKey: "AIzaSyBUThc0MNbp7QEiSrCfSGz-Uuati3SVTek",
    authDomain: "myportfolio30days.firebaseapp.com",
    projectId: "myportfolio30days",
    storageBucket: "myportfolio30days.appspot.com",
    messagingSenderId: "808232545786",
    appId: "1:808232545786:web:a25b08208c7b919ae58843"
  };
 
 
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();



  let email,fname,lname,number,Message;

  const submit = document.getElementById("submit").addEventListener('click',()=>{
    email = document.getElementById("email").value;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    number = document.getElementById("number").value;
    Message = document.getElementById("Message").value;

   

    db.ref("users/"+email.replace("@gmail.com","")).set({
        email:email,
        fname:fname,
        lname:lname,
        number:number,
        Message:Message
    })

    document.getElementById('form').reset();
    alert('Message sent');
})