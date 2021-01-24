const more = document.querySelectorAll(".more");
const sub = document.querySelector(".sub button");
const val = document.querySelector(".sub input");

for(let i=0;i<more.length;i++){
more[i].addEventListener('click',(e)=>{
   let parent =e.target.parentNode;
   let mores=parent.querySelector(".more");
   let para=parent.querySelector(".moremm");

   if(para.style.display==="" || para.style.display==="none"){
       para.style.display="block";
       mores.innerText="Read Less";
   }
   else {
    para.style.display="none";
    mores.innerText="Read More";
   }
});
}


sub.addEventListener('click',()=>{
    let mail=val.value;
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    if(mail == "") alert("Please Enter Your Email ");
    else { alert("Subscribed Successfully !!")
    db.ref("subscried Emails/"+mail).set({
        Email:mail,
        date :d.getDate()+"/"+months[d.getMonth()]+"/"+d.getFullYear()+" At "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(),
    })}
})


