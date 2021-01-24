
const submit = document.forms['form1'];
const table = document.querySelector(".data table");
const row = document.getElementsByTagName("tr");
const para = document.querySelector(".data p");

var fName,lName,mail,mob,msg,total_entries;


var sno = 0,ch=1;
submit.addEventListener("submit",function(e){
     para.style.display = "none";
     e.preventDefault();
     fName = submit.querySelector('#name').value;
     lName = submit.querySelector('#last').value;
     mail = submit.querySelector('#email').value;
     mob = submit.querySelector('#num').value;
     msg = submit.querySelector('#msg').value;

     for(i=1;i<row.length;i++){
         ch =1 ;
        var col = row[i].getElementsByTagName("td");
              if(fName.toLowerCase() == col[1].textContent && lName.toLowerCase() == col[2].textContent) {
                 alert("Name already existed !!");
                  ch =0; 
                  break;
                }
             if(mail == col[4].textContent){
                alert("Mail_ID already existed !!");
                ch =0; 
                break;
             }
             if(mob== col[3].textContent){
                alert("Phone number already existed !!");
                ch =0; 
                break;
             }
          }
     if(ch){
     var newrow= document.createElement('tr');
     var col1= document.createElement('td');
     var col2= document.createElement('td');
     var col3= document.createElement('td');
     var col4= document.createElement('td');
     var col5= document.createElement('td');
     var col6= document.createElement('td');
     newrow.style.animation="gets 2s 0.2s linear both";
     newrow.appendChild(col1);
     newrow.appendChild(col2);
     newrow.appendChild(col3);
     newrow.appendChild(col4);
     newrow.appendChild(col5);
     newrow.appendChild(col6);
     table.appendChild(newrow);

     col1.textContent=++sno;
     col2.textContent=fName;
     col3.textContent=lName;
     col4.textContent=mob;
     col5.textContent=mail;
     col6.textContent=msg;

      //   B A C K E N D - F I R E B A S E 

      db.ref("people/"+fName+" "+lName).set({
            First_Name:fName,
            Last_Name:lName,
            Email:mail,
            Mobile:mob,
            Message:msg,
      })

     }
    })


