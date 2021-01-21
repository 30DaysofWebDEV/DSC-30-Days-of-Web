const add = document.querySelector("#add");
const Name = document.querySelector("#name")
const email = document.querySelector("#email")
const text = document.querySelector("#text")


add.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(Name.value)
})