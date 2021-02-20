const form=document.getElementById("form");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const phone=document.getElementById("phone_no");
const mess=document.getElementById("message");

//after form is submitted
form.addEventListener("submit",(e)=>{

    //prevent the form from submitting
    e.preventDefault();

    //validate input
    
       if(validateInput())
       {
           setTimeout(() => {
            alert("Form Submitted sucessfullly");
            location.reload();
           }, 1000);     
       } 

});

function validateInput()
{
    //get all values
    //trim function removes white spaces
    const fnamevalue=fname.value.trim();
    const lnamevalue=lname.value.trim();
    const emailvalue=email.value.trim();
    const phonevalue=phone.value.trim();
    const messvalue=mess.value.trim();
    
    if(fnamevalue === "")
        //fname field is blank
        seterror(fname,"Please Enter First Name");
    else 
        setsuccess(fname); 

    if(lnamevalue ==="")
        seterror(lname,"Please Enter last Name");        
    else
        setsuccess(lname); 

    if(emailvalue==="")
        seterror(email  ,"Please Enter Email");          
    else{
        //cheque whether email address is correct or not
       if(isemail(emailvalue))
       {
           setsuccess(email);
       }
       else 
        {
            seterror(email,"Please Enter valid Email");   
        }   
    }
    if(phonevalue ==="")
        seterror(phone,"Please Enter phone number");     
    else
        setsuccess(phone);

    if(messvalue ==="") 
        seterror(mess,"Please Enter message");             
    else
        setsuccess(mess);
   
    //if any of value is false return false
  if(fnamevalue === "" || lnamevalue === "" || emailvalue==="" || phonevalue==="" || messvalue==="") 
        return false;    

    return true;      
}
function isemail(value){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}
function seterror(input,message)
{
    var formcontrol= input.parentElement;      // form-control
    var small=formcontrol.querySelector("small");

        console.log(small);
        //set error message
        small.innerText=message;
       //add error box 
        formcontrol.className="mb-3 form-contro error";

}

function setsuccess(input)
{
    //set suceess box
        var formcontrol=  input.parentElement;
        formcontrol.className="mb-3 form-contro su";

        var small=formcontrol.querySelector("small");
        small.innerText="";
}