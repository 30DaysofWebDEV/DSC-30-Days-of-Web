const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
function addRow()
            {
                // get input values
                var fname = document.getElementById('fname').value;
                 var lname = document.getElementById('lname').value;
                  var age = document.getElementById('age').value;
                  var email = document.getElementById('email').value;

                  // get the html table
                  // 0 = the first table
                  var table = document.getElementsByTagName('table')[0];

                  if (fname,lname,age,email === '') {
                    alert("Fill in All Details!");
                    } else {
                      var newRow = table.insertRow(table.rows.length/2+1);
                      var cel1 = newRow.insertCell(0);
                      var cel2 = newRow.insertCell(1);
                      var cel3 = newRow.insertCell(2);
                      var cel4 = newRow.insertCell(3);
                      cel1.innerHTML = fname;
                      cel2.innerHTML = lname;
                      cel3.innerHTML = age;
                      cel4.innerHTML = email;
                    }


            }