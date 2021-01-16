
// track tasks
    $(document).ready(()=>{
        $('.clear-completed').click(()=>{
            $('ul li.checked').remove();
            $('ul li:not(.checked)').show()
            
        });
       
        $('.filter-completed').click(()=>{
           if($('ul li:not(.checked)').length!=0){

            $('ul li:not(.checked)').hide();
            $('ul li.checked').show();
           }
           else alert('you have completed all your todos!')

        });

        $('.filter-active').click(()=>{
            if($('ul li:not(.checked)').length!=0){
                $('ul li.checked').hide();
                $('ul li:not(.checked)').show();

            }
            else alert('you have no active todo!')
        });
      

        $('.filter-all').click(()=>{
            $('ul li').show()
        });

    });

  

        
        // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.title = 'close task';
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove()

    // document.getElementById

     
    if( div.className !== 'checked' ){

        let active = $('ul li:not(.checked)')

        console.log(`${active.length} tasks left`)
  
        document.getElementById('taskNum').innerHTML = `${active.length} tasks left`
      
    }
  }
}
        
// Add a "checked" symbol when clicking on a list item

var list = document.querySelector("UL");

list.addEventListener("click", (ev)=>{
    
    if(ev.target.tagName === "LI") {

        ev.target.classList.toggle("checked");

        let active = $('ul li:not(.checked)');

        $('#taskNum').html(`${active.length} tasks left`);
    }

}, false);

// Create a new list item when clicking on the "Add" button


function newElement() {


      li = document.createElement("LI");

     li.title = 'created task';

   var inputValue = document.getElementById("myInput").value;

    var t = document.createTextNode(inputValue);

    li.appendChild(t);
   

    if(inputValue === "") {

        alert("Create a task!") ;
    }

    else{

        document.getElementById("list").appendChild(li);

        // recently added
            let active = $('ul li:not(.checked)')
            $('#taskNum').html(`${active.length} tasks left`);
            li.classList.add('listItems')
        
    }

    document.getElementById("myInput").value = "" ;

    
    var span = document.createElement("SPAN");

    // cancel a todo

    var txt = document.createTextNode("\u00D7");

    span.title = 'close task';

    span.className = "close" ;

    span.appendChild(txt);

    li.appendChild(span);

   
    for(i = 0 ; i<close.length ; i++) {

        close[i].onclick =function(){

            var div = this.parentElement ;

            div.remove() ;
                
                if( div.className !== 'checked' ){

                let active = $('ul li:not(.checked)')

                console.log(`${active.length} tasks left`)

                document.getElementById('taskNum').innerHTML = `${active.length} tasks left`
                
            }

        }

    }

}


// add active class to active filter button
var filterBtns = document.getElementsByClassName("filter");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < filterBtns.length; i++) {

  filterBtns[i].addEventListener("click", function() {

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += "active";
  });
}


    //  updating active todos
     const active = $('ul li:not(.checked)')
     $('#taskNum').html(`${active.length} tasks left`);



 