// @Dsc web development for 30 Days - Firebase Day-2 By Pranav Agarwal-DSC MRIIRS

let id,name,email;

const add = document.getElementById("add").addEventListener('click',()=>{
    id = document.getElementById("id").value;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;

    db.ref("users/"+id).set({
        Name:name,
        Email:email,
    })
})

const update = document.getElementById("up").addEventListener('click',()=>{
    id = document.getElementById("id").value;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;

    db.ref("users/"+id).update({
        Name:name,
        Email:email,
    })
})

const get = document.getElementById("get").addEventListener('click',()=>{
    id = document.getElementById("id").value;

    db.ref("users/"+id).on("value",snapshot=>{
        document.getElementById("name").value = snapshot.val().Name;
        document.getElementById("email").value = snapshot.val().Email;
    })
})

const del = document.getElementById("del").addEventListener('click',()=>{
    id = document.getElementById("id").value;
    
    db.ref("users/"+id).remove();
})