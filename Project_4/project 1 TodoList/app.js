const add = document.querySelector("#add");
const input = document.querySelector("#input");
const list = document.querySelector("#List");
const edit = document.querySelector("#edit");


let task = "";

edit.addEventListener("click",()=>{
    const listitems = document.querySelectorAll(".item");
    for (let i = 0; i < listitems.length; i++) {
        if (listitems[i].getAttribute("flag") === "true") {
            listitems[i].setAttribute("contenteditable","true")
        }
    }  

})


add.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value !== "") {
        let d = document.createElement("div");
        d.classList.add("listItem");
        let li = document.createElement("li");
        
        li.classList.add("item");
        li.innerHTML = input.value;
        let b1 = document.createElement("button");
        b1.classList.add("check")
        b1.classList.add("fa");
        b1.classList.add("fa-check");
        let b2 = document.createElement("button");
        b2.classList.add("trash")
        b2.classList.add("fa");
        b2.classList.add("fa-trash");
        d.appendChild(li);
        d.appendChild(b1);
        d.appendChild(b2);
        list.appendChild(d);
        input.value = "";
    }
})

list.addEventListener('click',complete)

function complete(e) {
    const item = e.target;
    if (item.classList[0] === "trash") {
        const p = item.parentElement;
        p.classList.add("remove")
        p.addEventListener("transitionend", () => {
            p.remove();
        })
        
    }

    if (item.classList[0] === "check") {
        const p = item.parentElement;
        
        p.children[0].classList.toggle('complete')
    }

    if (item.classList[0] === "item") {
        const listitems = document.querySelectorAll(".item");
        for (let i = 0; i < listitems.length; i++){
            listitems[i].setAttribute("flag", "false");
        }

        item.setAttribute("flag","true")
        // console.log(listitems,item.getAttribute("flag"));
        item.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                console.log("hello")
                item.setAttribute("contenteditable", "flase");
            }
        })
    }
     
}
