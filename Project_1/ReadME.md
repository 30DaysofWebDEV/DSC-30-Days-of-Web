# Project 1: HTML Project (Barebones Portfolio)

### Create a barebones HTML portfolio website of your own using the following features: 

* Header
* Footer
* Contact form with **buttons, email input, number input, first name and last name**
* Table 
* Video
* Images

<!DOCTYPE html>
<html>
    <head>
        <title>My Journey in Web Development</title>
    </head>
    <body>
        <article>
            <img src="E:\\pic\\20201125_173407.jpg" alt="my pic" width="180" height="200"/>
            <header>
                <h3>A bit of what Seemant did in Web Development</h3>
                <p>First of all, I really thank to DSC team. As I had keen interest in web development but did not know where to and how to start, in this DSC team helped me a lot.</p>
            </header>
        </article>
        
        <video width="300" height="240" controls>
            <source src="E:\\video\\DSC.mp4" type="video/mp4">
                video not available
        </video>

        <p>This is from where I started my journey with DSC.Today, I know much about HTMl.</p>
        <table style=100% >
            <tr>
                <th>
                    Name
                </th>
                <th>
                    College
                </th>
                <th>
                    Branch
                </th>
            </tr>
            <tr>
                <td>
                    Seemant sharma
                </td>
                <td>
                    MBM Engineering college
                </td>
                <td>
                    Electronics and computer engineering
                </td>
            </tr>
        </table>
        <h1>Contact Form</h1>
        <p>So that I can contact you for queries.</p>
        <form action="/action_page.php">
            <label for="email">Email ID:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" required><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" required><br>
            <label for="mob no.">Mobile no.</label><br>
            <input type="number" id="mob no." name="mob no." required><br> 
            <button type="button">SUBMIT</button>
          </form>

        <footer>
            <p>By Seemant Sharma</p>
            <a href="https://dsc.community.dev/jai-narain-vyas-university/" target="_blank">DSC web page</a>
        </footer>
    </body>
</html>
