let email,pass,user;

const auth = firebase.auth();

const signup = document.getElementById("signup-btn");

let usr = document.getElementById("user");

signup.addEventListener('click',()=>{
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email,pass)
    .then(()=>alert("You are on Firebase!!"))
    .catch(err=>{
        alert(err);
    })
})

const login = document.getElementById("login-btn")
.addEventListener('click',()=>{
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email,pass)
    .then(()=>{
        user = auth.currentUser;
        if(user) usr.innerText = "User is there"
        alert("logged in!")
    })
    .catch(err=>alert(err));
})

const logout = document.getElementById("logout")
.addEventListener('click',()=>{
    auth.signOut().then(()=>{
        user = auth.currentUser;
        if(!user) usr.innerText="No User!";
        alert("logged out!")
    })
    .catch(err=>alert(err));
})

