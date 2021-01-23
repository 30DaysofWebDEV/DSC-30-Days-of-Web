let id;
let names;
let email;
let address;
let number;
let concern;

let add = document.getElementById("add");

add.addEventListener("click", () => {
    id = document.getElementById("ids").value;
    names = document.getElementById("name").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    number = document.getElementById("number").value;
    concern = document.getElementById("concern").value;
    db.ref("portfolio/" + id).set({
        Name: names,
        Email: email,
        Address: address,
        Number: number,
        Concern: concern,
    });
});