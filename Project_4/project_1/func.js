const start_btn  = document.querySelector("#front button");
const submit_btn = document.querySelector("#name_card .submit");
let Name = document.querySelector("#name");
const card = document.querySelector("#name_card");
const front = document.querySelector("#front");
const site = document.querySelector("#site");
const user = document.querySelector("#site .nav span");
const like = document.querySelector(".nav .like");
const about = document.querySelector(".nav .about");
const aboutus = document.querySelector(".about1");
const add_btn= document.querySelector(".task button");
const task_man=document.querySelector(".taskmanager");
const flow = document.querySelector(".dup");
const tasks = document.querySelector(".task input");
const clearall= document.querySelector(".fa");


start_btn.addEventListener("click",()=>{
        card.setAttribute('style','animation:card 0.3s reverse ease; z-index:2');
        setTimeout(()=>{
             front.setAttribute('style','display:none');
        },1000)
    });


submit_btn.addEventListener('click',()=>{
    if(Name.value == "") alert("Please Enter Your Name ");
    else{
    var username=Name.value.toUpperCase();
    card.setAttribute('style','animation:card 1s both;');
    flow.setAttribute('class','flowdiv');
    let para = document.createTextNode(`Hi ! ${username}`);
    user.appendChild(para);
    }
});

like.addEventListener("click",()=>{
    like.textContent="liked";
    like.setAttribute('style','pointer-events:none ; color:');
    alert("Thank You !");
})

about.addEventListener('click',()=>{
    if (aboutus.style.display === "none") {
        aboutus.style.display = "block";
      } else {
        aboutus.style.display = "none";
      }
});

var task_name;

add_btn.addEventListener("click",()=>{
    if(tasks.value == "") alert("Enter a Task to Add !");
    else{
    var newdiv = document.createElement("div");
    var divhead = document.createElement("div");
    var divbody = document.createElement("div");
    var done = document.createElement("button");
    var remove = document.createElement("button");
    var task_name = tasks.value;
    newdiv.setAttribute('class','task_item');
    divhead.setAttribute('class','div1');
    divbody.setAttribute('class','div2');
    remove.setAttribute('class','red');
    done.setAttribute('class','green');
    done.innerHTML=" &#10004; "
    remove.innerHTML=" &#10006; ";
    divbody.innerText=task_name;
    divhead.appendChild(remove);
    divhead.appendChild(done);
    newdiv.appendChild(divhead);
    newdiv.appendChild(divbody);
    task_man.appendChild(newdiv);
    tasks.value="";

    var done_btn = document.getElementsByClassName('green');
    var rem_btn = document.getElementsByClassName('red');
    var div = document.getElementsByClassName('task_item');
    var body = document.getElementsByClassName('div2');

    console.log(done_btn.length);
    for(let i=0;i<done_btn.length;i++){
        done_btn[i].addEventListener("click",()=>{
           body[i].setAttribute('style','text-decoration:line-through');
      });
     }
     for(let i=0;i<rem_btn.length;i++){
        rem_btn[i].addEventListener("click",()=>{
           div[i].setAttribute('style','display:none');
      });
     }
      clearall.addEventListener('click',()=>{
         for(i=0;i<rem_btn.length;i++){
             div[i].setAttribute('style','display:none');
         }
     });
   }
   }
});






