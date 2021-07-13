# Project 1: HTML Project (Barebones Portfolio)

### Create a barebones HTML portfolio website of your own using the following features: 

* Header
* Footer
* Contact form with **buttons, email input, number input, first name and last name**
* Table 
* Video
* Images

<!-- # Project 1: HTML Project (Barebones Portfolio)

### Create a barebones HTML portfolio website of your own using the following features: 

* Header
* Footer
* Contact form with **buttons, email input, number input, first name and last name**
* Table 
* Video
* Images -->

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Project 1</title>
    </head>
    <body style="background-color: rgb(236, 185, 168)">
        <header>
            <h1 style="font-family:Arial; color:darkblue; text-align: center">Barebones Portfolio</h1>
        </header>
        <form>
            <h2 style="font-family:sans-serif">Contact form</h2>
            <lable for="fname"> First Name: </lable>
            <input type="text" id="fname" name="fname">
            <br><br>
            <lable for="lname"> Last Name: </lable>
            <input type="text" id="lname" name="lname">
            <br><br>
            <lable for="cont_num"> Phone No.: </lable>
            <input type="number" id="cont_num" name="cont_num">
            <br><br>
            <lable for="email"> Email Id: </lable>
            <input type="text" id="email" name="email">
            <br><br>
            <lable for="age"> Age: </lable>
            <input type="number" id="age" name="age">
            <br><br>
            <lable for="gen"> Gender: </lable>
            <br>
            <input type="radio" id="gen" name="gen" value="Male">
            <Lable for="male">Male</Lable>
            <br>
            <input type="radio" id="gen" name="gen" value="Female">
            <Lable for="female">Female</Lable>
            <br>
            <input type="radio" id="gen" name="gen" value="Male">
            <Lable for="other">Other</Lable>
            <br><br>
            <button type="button">Submit</button>
            <button type="button">Reset</button>
        </form>
        <hr>
        <h2 style="font-family:sans-serif">Contact information (in tabular format)</h2>
        <table style="width:30%">
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>PhoneNo</th>
                <th> Age</th>
            </tr>
            <tr>
                <td>Ram</td>
                <td>Patil</td>
                <td>987219999</td>
                <td> 31</td>
            </tr>
            <tr>
                <td>Sita</td>
                <td>Joshi</td>
                <td>987654321</td>
                <td> 20</td>
            </tr>
            <tr>
                <td>Sakhee</td>
                <td>Gokhle</td>
                <td>935488999</td>
                <td> 25</td>
            </tr>
        </table>
        <hr>
        <h2 style="font-family:sans-serif">Video</h2>
        <video width="350px" height="250px" controls>
            <source src="movie.mp4" type="video/mp4">        
        </video>
        <br>
        <hr>
        <h2 style="font-family:sans-serif">Image</h2>
        <img src="tom&jerry.jpeg" alt="Tom and Jerry" width="350px" height="250px"> 
        <br>
        <hr>
        <footer>
            <p><i><sup>&copy</sup> Copyright 2020</i>
            <address>
                By Barebones<br>
                www.barebones.com<br>
                Box 564, Mumbai<br>
                India
            </address>
        </footer>
    </body>
</html>
