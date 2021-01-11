
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  selectElement(".nav-list").classList.toggle("active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5)
    }
  });

  selectElement(".burger-menu-icon").classList.toggle("toggle");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    selectElement(".burger-menu-icon").classList.toggle("toggle");
  });
});
        var arr= new array();
        function addData(){
          getData();
          arr.push({
            name1:document.getElementById("name1").value,
            name2:document.getElementById("name2").value,
            name3:document.getElementById("name3").value,
            name4:document.getElementById("name4").value,
      });
      localStorage.setItem("localData",JSON.stringify(arr));
      showData();
    }
    fuction ;getData() ;{
      var str =localStorage.getItem("localData");
      if(str!=null){
        arr=JSON.parse(str);
      }
    }
    function showData(){
      getData();
      var tbl= document.getElementById("myTable");
      var x= tbl.rows.length;
      while(--x){
        tbl.deleteRow(x);
      }
      for(i=0;i<arr.length;i++)
      {
        var r= tbl.insertRow();
        var cell1= r.insertCell();
        var cell2= r.insertCell();
        var cell3= r.insertCell();
        var cell4= r.insertCell();
    
        cell1.innerHTML = arr[i].name1;
        cell2.innerHTML = arr[i].name2;
        cell3.innerHTML = arr[i].name3;
        cell4.innerHTML = arr[i].name4;
      }
     }

