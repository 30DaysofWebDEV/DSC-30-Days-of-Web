// script for theme toggle

const header = document.getElementById('header');

const toggleBtn = document.getElementById('toggle-btn');

const UL = document.getElementById('list');

const trackTasks = document.getElementById('trackTasks');

const closeList = document.querySelectorAll('.close');

const myInput = document.getElementById('myInput');

const textMode = document.getElementById('mode-text');

const filters2 = document.getElementById('filters-2')


toggleBtn.addEventListener('change', ()=>{

   if(toggleBtn.checked){

    document.body.style.backgroundColor = "#fafafa";

    document.body.style.color = "black";

    myInput.style.backgroundColor = "white";

    myInput.style.color = "black";

    filters2.style.backgroundColor = "white";

    filters2.style.color = "black";

    textMode.innerHTML = 'Light Mode';

    header.classList.remove('header-1');

    header.classList.add('header-2');

    UL.classList.add('ul');

    UL.classList.remove('list');

    UL.classList.add('list-light');

    trackTasks.style.backgroundColor = '#fff';

    trackTasks.style.color = 'black';

    trackTasks.style.color = 'black';

        for(let i = 0 ; i<closeList.length; i++){

            closeList[i].classList.remove('close');

            closeList[i].classList.add('close-light');

        }

   }

   else{

    document.body.style.backgroundColor = "#181824";

    myInput.style.backgroundColor = "#25273c";
    
    myInput.style.color= "black";

    filters2.style.backgroundColor = "#25273c";

    filters2.style.color = "#9394a5";

    textMode.innerHTML = 'Dark Mode';

    document.body.style.color = "white";

    header.classList.add('header-1');

    header.classList.remove('header-2');

    UL.classList.remove('ul');

    UL.classList.add('list');

    UL.classList.remove('list-light');

    trackTasks.style.backgroundColor = '#25273c';

    trackTasks.style.color = '#9394a5';


        for(let i = 0 ; i<closeList.length; i++){

            closeList[i].classList.add('close');

            closeList[i].classList.remove('close-light');

        }
    }
})