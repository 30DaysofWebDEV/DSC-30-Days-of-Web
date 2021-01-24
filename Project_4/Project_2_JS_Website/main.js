function display() {
    DispWin = window.open('', 'next.html', 'toolbar=yes,status=yes,width=300,height=200')
    message = '<table style="margin:200px auto;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family: arial, sans-serif;border-collapse: collapse;width: 100%;"><tr><th style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Details Name</th><th style="border: 1px solid #dddddd;text-align: left;padding: 8px;>Details</th></tr><tr style="background-color: #dddddd;"><td style="border: 1px solid #dddddd;text-align: left;padding: 8px;"><b>NAME : </b></td>' + '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">' + document.form1.name.value + '</td></tr>';
    message += '<tr><td style=""><b>ADDRESS : </b></td>' + '<td style="style="border: 1px solid #dddddd;text-align: left;padding: 8px;">' + document.form1.address.value + '</td></tr>'; message += '<tr style="background-color: #dddddd;"><td style="border: 1px solid #dddddd; text-align: left; padding: 8px;"><b>PHONE NUMBER : </b></td>' + '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">' + document.form1.number.value + '</td></tr>'; message += '<tr><td style="border: 1px solid #dddddd;text-align: left;padding: 8px;"><b>EMAIL : </b></td>' + '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">' + document.form1.email.value + '</td></tr>'; message += '<tr style="background-color: #dddddd;"><td style="border: 1px solid #dddddd;text-align: left;padding: 8px;"><b>YOUR CONCERN : </b></td>' + '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">' + document.form1.concern.value + '</td></tr></table>';
    DispWin.document.write(message);
}

$("#name").keypress(function () {
    $("#address").show("slow");
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

$("#address").keypress(function () {
    $("#number").show("slow");
});

$("#number").keypress(function () {
    $("#email").show("slow");
});

$("#email").keypress(function () {
    $("#concern").show("slow");
});

