let name,email,message;

const add = document.getElementById("add").addEventListener("click", () =>{
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    db.ref("portfolio/"+name).set({
        Name:name,
        Email:email,
        Message:message,
    })
});