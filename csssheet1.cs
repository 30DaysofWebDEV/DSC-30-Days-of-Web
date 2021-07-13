<<<<<<< HEAD
*{
    margin: 0;
    padding:0;
}
:root{
    height: 59px;
}
/* Navigation bar */
#navbar{
    display:flex;
    align-items: center;
    position: relative;
}

#navbar::before{
    content: "";
    background-color: black;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.7;

}
/* logo */
 #logo{
    margin: 10px 34px;

}
 #logo img{
    height:53px;
    margin: 3px 6px;
}
/* list styling */

#navbar ul{
    display: flex;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

#navbar ul li {
     list-style: none;
     font-size: 1rem;    

}
#navbar ul li a{
    color: white;
    display:block;
    padding: 3px 18px;
    border-radius: 20px;
    text-decoration: none;
}
#navbar ul li a:hover{
    color:black;
    background-color: white;
}
/* project section */
#project{
    display:flex;
    flex-direction: column;
    padding: 3px 100px;
    height:555px;
    justify-content: center;
    align-items: center;
}
#project::before{ 
      content: "";
    background: url('Desert.jpg') no-repeat center center/cover;
    position: absolute;
    height: 90%;
    width: 100%;
    z-index: -1;
    opacity: 0.9;
        
}
#project h1{
    color: black;
    text-align: center;
    font-family:  Georgia, Times, 'Times New Roman', serif;
}
#project p{
    color: white;
    text-align: center;
    font-size: 1rem;
    font-family:  Georgia, Times, 'Times New Roman', serif;
}
#about {
    border:2px solid brown;
    background-color:#c4d5dc;
    margin:40px;
    display:flex;
    flex-direction: column;
    width: 440px;
    border-radius: 28px;
    margin-left: 430px;
    text-align: center;
    justify-items: center;
}
#field{
    content: "";
    background: url('Lighthouse.jpg') no-repeat center center/cover;
    position: relative;
    width: 500px;
    height: 500px;
    z-index: -1;
    text-align: center;
    justify-items: center;
    margin-left: 400px;
}

/* utility classes */
.form{
    text-align: center;
    justify-items: center;
    padding:20px 10px;
    color: rgba(255, 254, 254, 0.993);
    
}
.h-primary{
    font-size: 2.8rem;
    padding: 12px;
}
.h-secondary{
    color: black;
    font: bolder;
    font-size: 2rem;
    padding: 12px;
}
.btn{
    padding: 6px 20px;
    border: 2px white;
    background-color: burlywood;
    color: black;
    margin:17px;
    border-radius: 10px;
    cursor: pointer;
    
=======
*{
    margin: 0;
    padding:0;
}
:root{
    height: 59px;
}
/* Navigation bar */
#navbar{
    display:flex;
    align-items: center;
    position: relative;
}

#navbar::before{
    content: "";
    background-color: black;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.7;

}
/* logo */
 #logo{
    margin: 10px 34px;

}
 #logo img{
    height:53px;
    margin: 3px 6px;
}
/* list styling */

#navbar ul{
    display: flex;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

#navbar ul li {
     list-style: none;
     font-size: 1rem;    

}
#navbar ul li a{
    color: white;
    display:block;
    padding: 3px 18px;
    border-radius: 20px;
    text-decoration: none;
}
#navbar ul li a:hover{
    color:black;
    background-color: white;
}
/* project section */
#project{
    display:flex;
    flex-direction: column;
    padding: 3px 100px;
    height:555px;
    justify-content: center;
    align-items: center;
}
#project::before{ 
      content: "";
    background: url('Desert.jpg') no-repeat center center/cover;
    position: absolute;
    height: 90%;
    width: 100%;
    z-index: -1;
    opacity: 0.9;
        
}
#project h1{
    color: black;
    text-align: center;
    font-family:  Georgia, Times, 'Times New Roman', serif;
}
#project p{
    color: white;
    text-align: center;
    font-size: 1rem;
    font-family:  Georgia, Times, 'Times New Roman', serif;
}
#about {
    border:2px solid brown;
    background-color:#c4d5dc;
    margin:40px;
    display:flex;
    flex-direction: column;
    width: 440px;
    border-radius: 28px;
    margin-left: 430px;
    text-align: center;
    justify-items: center;
}
#field{
    content: "";
    background: url('Lighthouse.jpg') no-repeat center center/cover;
    position: relative;
    width: 500px;
    height: 500px;
    z-index: -1;
    text-align: center;
    justify-items: center;
    margin-left: 400px;
}

/* utility classes */
.form{
    text-align: center;
    justify-items: center;
    padding:20px 10px;
    color: rgba(255, 254, 254, 0.993);
    
}
.h-primary{
    font-size: 2.8rem;
    padding: 12px;
}
.h-secondary{
    color: black;
    font: bolder;
    font-size: 2rem;
    padding: 12px;
}
.btn{
    padding: 6px 20px;
    border: 2px white;
    background-color: burlywood;
    color: black;
    margin:17px;
    border-radius: 10px;
    cursor: pointer;
    
>>>>>>> def56442a1b9ca45bf674bd07f21e9d43b70d56a
}
