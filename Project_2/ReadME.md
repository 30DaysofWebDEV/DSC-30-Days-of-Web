# Project 2: Add style to your previous project.

Refer [CSSZenGarden.com](http://www.csszengarden.com/) and understand how it works. Inspiring yourself from that website, add styling to your _Barebones_ HTML page from Project 1.

<!-- PROJECT2 CSS -->

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Project 2</title>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  text-align: center;
  background: rgb(251, 253, 99);
}

.header h1 {
  font-size: 50px;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: rgb(31, 41, 27);
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #c4b7fd;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.leftcolumn {   
  float: left;
  width: 75%;
}

.rightcolumn {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}

.vid {
    background-color: rgb(217, 212, 241);
}

.imgs {
  background-color: rgb(245, 130, 245);
  width: 100%;
  padding: 20px;
}

.card {
  background-color: rgb(248, 147, 147);
  padding: 20px;
  margin-top: 20px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.footer {
  padding: 20px;
  text-align: center;
  background: rgb(191, 252, 252);
  margin-top: 20px;
}
</style>
</head>

<body>
<header>
    <h1 style="font-family:Arial; color:darkblue; text-align: center">Barebones Portfolio</h1>
</header>

<div class="topnav">
  <a href="#">Start here</a>
  <a href="#">Blogs</a>
  <a href="#">News</a>
  <a href="#">Help</a>
  <a href="#" style="float:right">Sign in</a>
</div>

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
    <button style="background-color:rgb(0, 0, 0); color:white;" type="button">Submit</button>
    <button style="background-color:rgb(0, 0, 0); color:white;" type="button">Reset</button>
</form>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Contact Information</h2>
      <h5>last Modified, Dec 7, 2017</h5>
      <table style="width:40%">
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
    </div>
    <div class="vid">
        <h2 style="font-family:sans-serif">Video</h2>
        <video width="350px" height="250px" controls>
            <source src="movie.mp4" type="video/mp4">        
        </video>
        <br>
    </div class="vid"> 
  </div>
  <div class="rightcolumn">
    <div class="card">
        <h2>About Me</h2>
        <p>I am a tech enthusiast.</p>
    </div>
    <br><br>
    <div class="imgs">
      <h3>Languages learned</h3>
      <img src="JavaLogo.jpeg" alt="Java" width="50px" height="50px"><br>
      <img src="PythonLogo.jpeg" alt="Python" width="50px" height="50px"><br>
      <img src="CppLogo.jpeg" alt="C++" width="50px" height="50px"><br>
      <img src="CLogo.jpeg" alt="C" width="50px" height="50px"><br>
    </div>
  </div>
</div>

<div class="footer">
    <p><i><sup>&copy</sup> Copyright 2020</i>
    <address>
        By Barebones<br>
        www.barebones.com<br>
        Box 564, Mumbai<br>
        India
    </address>
</div>

</body>
</html>
