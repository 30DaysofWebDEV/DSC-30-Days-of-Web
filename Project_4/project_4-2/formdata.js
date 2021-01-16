function submitts() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mobile = document.getElementById("mob").value;
    var mailadd = document.getElementById("mailaddress").value;
    var msgs = document.getElementById("msg").value;

    if (fname !== "" && lname !== "" && mobile !== "" && mailadd !== "" && msgs !== "") {

        var dataarray = {
            name: fname,
            lastname: lname,
            mobilenum: mobile,
            mailid: mailadd,
            message: msgs
        };




        // var dataseesionfname;
        // var dataseesionlname;
        // var dataseesionmobile;
        // var dataseesionmailid;
        // var dataseesionmsg;
        // var datasessionrecheck;
        var dataseesion = sessionStorage.setItem('formdata', JSON.stringify(dataarray));

        var datasessionget = sessionStorage.getItem('formdata');
        var datasessionrecheckget = sessionStorage.getItem('formdatarecheck');
        var dataseesionfname = sessionStorage.getItem('formdatafname');
        var dataseesionlname = sessionStorage.getItem('formdatalname');
        var dataseesionmobile = sessionStorage.getItem('formdatamobile');
        var dataseesionmailid = sessionStorage.getItem('formdatamailid');



        if (datasessionget !== datasessionrecheckget) {
            if (dataseesionmobile !== mobile) {
                if (dataseesionmailid !== mailadd) {
                    var data = '<div class="flexcontainer">' +
                        '<div><span id="firstname">' + fname + '</span><span> </span><span id="lastname">' + lname + '</span></div>' +
                        '                <div id="listmob">' + mobile + '</div>' +
                        '                <div id="listemail">' + mailadd + '</div>' +
                        '                <div id="listmsg">' + msgs + '</div>' +
                        '            </div>';
                    document.getElementById("entry").innerHTML += data;

                    var datasessionrecheck = sessionStorage.setItem('formdatarecheck', JSON.stringify(dataarray));
                    var dataseesionfname = sessionStorage.setItem('formdatafname', fname);
                    var dataseesionlname = sessionStorage.setItem('formdatalname', lname);
                    var dataseesionmobile = sessionStorage.setItem('formdatamobile', mobile);
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
        } else {
            document.getElementById("alertfield").style.display = 'block';
        }
        document.getElementById("emptyfield").style.display = 'none';

    } else {
        document.getElementById("emptyfield").style.display = 'block';
    }


    // var data = '<div class="flexcontainer">' +
    ///  '<div><span id="firstname">' + fname + '</span><span> </span><span id="lastname">' + lname + '</span></div>' +
    //  '                <div id="listmob">' + mobile + '</div>' +
    //  '                <div id="listemail">' + mailadd + '</div>' +
    //  '                <div id="listmsg">' + msgs + '</div>' +
    //    '            </div>';
    // document.getElementById("entry").innerHTML = +data;
}