AOS.init({
  duration: 1050,
})


function data() {
	 
	 var fname =document.forms["Form"]["first-name"].value;
	 var lname =document.forms["Form"]["last-name"].value;
	 var email =document.forms["Form"]["email"].value;
	 var msg =document.forms["Form"]["message"].value;
	 
	 var form_data=[];
	 form_data = [fname,lname,email,msg];
	 var id = {};
	 id={0:"First Name", 1:"Last name", 2:"Email", 3:"Message"};
	 var count=0;
	 var str="";
	 
	for(let i=0;i<4;i++)
	{
		if(form_data[i]==="")
		{
			str+=id[i]+"-";
			count++;
		}
	}
	
	console.log(count);
	
	if(count==1)
	{
		str=str+"field is not filled!!!!";
		alert(str);
	}
	
	else if(count>1)
	{
		str=str+"fields are not filled!!!!";
		alert(str);
	}
	
	else if(count==0)
	{
		var content="<h1>Form Response</h1>";
		content+="<h2>First name: "+fname+"</h2>";
		content+="<h2>Last name: "+lname+"</h2>";
		content+="<h2>Email: "+email+"</h2>";
		content+="<h2>Message: "+msg+"</h2>";
		var element=document.getElementById("form-response");
		element.innerHTML=content;
		element.classList.add("form-display"); 
	}

	 
}