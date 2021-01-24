var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var n = 1;
var x = 0;
function AddRow(){
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("lname").value;
    list3[x] = document.getElementById("email").value;
    list4[x] = document.getElementById("phone").value;
    if(list1[x]=="" || list2[x]=="" || list3[x]=="" || list4[x]=="")
    {
        window.alert("Field required");
    }
    else{
        var cel1 = NewRow.insertCell(0);
        var cel2 = NewRow.insertCell(1);
        var cel3 = NewRow.insertCell(2);
        var cel4 = NewRow.insertCell(3);
        
        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];
        cel4.innerHTML = list4[x];
    }
    n++;
    x++;
}
function myFunction() {
    document.getElementById("myForm").reset();
}