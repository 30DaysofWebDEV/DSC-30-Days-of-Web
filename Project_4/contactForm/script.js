const contactForm = document.getElementById('contact-form');
const formData = document.getElementById('formData');
let dataArr = [];

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let fname = e.target.fname.value;
    let lname = e.target.lname.value;
    let email = e.target.email.value;
    let mob = e.target.mob.value;
    let textMsg = e.target.textMsg.value;
    let obj = {
        fname : fname,
        lname : lname,
        email : email,
        mob : mob,
        textMsg : textMsg
    };
    
    dataArr.push(obj);

    showData();
});

const showData = () => {
    let output = '';

    dataArr.forEach((element, index) => {
        if(element.textMsg == '') {
            output += `<div class="col my-3">
                                    <div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">${element.fname} ${element.lname}</h5>
                                            <p>Email: ${element.email}</p>
                                            <p>Contact: ${element.mob}</p>
                                        </div>
                                    </div>
                                </div>`;
        } else {
            output += `<div class="col my-3">
                                    <div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">${element.fname} ${element.lname}</h5>
                                            <p>Email: ${element.email}</p>
                                            <p>Contact: ${element.mob}</p>
                                            <p>Message: ${element.textMsg}</p>
                                        </div>
                                    </div>
                                </div>`;
        }
    });

    formData.innerHTML = output;
}