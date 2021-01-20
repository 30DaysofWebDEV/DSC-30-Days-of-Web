function submitts() {
    var fname = document.getElementById("name").value;
    var mailadd = document.getElementById("email").value;
    var msgs = document.getElementById("messages").value;

    if (fname !== "" && mailadd !== "" && msgs !== "") {

        var dataarray = {
            name: fname,
            mailid: mailadd,
            message: msgs
        };
        var dataseesion = sessionStorage.setItem('formdata', JSON.stringify(dataarray));

        var datasessionget = sessionStorage.getItem('formdata');
        var datasessionrecheckget = sessionStorage.getItem('formdatarecheck');
        var dataseesionfname = sessionStorage.getItem('formdatafname');
        var dataseesionmailid = sessionStorage.getItem('formdatamailid');



        if (datasessionget !== datasessionrecheckget) {
            
                if (dataseesionmailid !== mailadd) {
                    var data = '<div class="flexcontainer">' +
                        '<div><span id="firstname">' + fname + '</span></div>' +
                        '<div id="listemail">' + mailadd + '</div>' +
                        '<div id="listmsg">' + msgs + '</div>' +
                        '</div>';
                    document.getElementById("entry").innerHTML += data;

                    var datasessionrecheck = sessionStorage.setItem('formdatarecheck', JSON.stringify(dataarray));
                    var dataseesionfname = sessionStorage.setItem('formdatafname', fname);
                    var dataseesionmailid = sessionStorage.setItem('formdatamailid', mailadd);

                    sessionStorage.removeItem('formdata');
                    document.getElementById("alertfield").style.display = 'none';
                    document.getElementById("nodatatable").style.display = 'none';



                } else {
                    document.getElementById("alertfield").style.display = 'block';
                }
            
        } else {
            document.getElementById("alertfield").style.display = 'block';
        }
        document.getElementById("emptyfield").style.display = 'none';

    } else {
        document.getElementById("emptyfield").style.display = 'block';
    }
}
function allsessionremove() {
    sessionStorage.removeItem('formdatarecheck');
    sessionStorage.removeItem('formdatafname');
    sessionStorage.removeItem('formdatamailid');
    document.getElementById("nodatatable").style.display = 'block';
}