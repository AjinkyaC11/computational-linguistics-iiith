<style>
.start
{
  float:center;
  height:16%;
  width:70%;

}
body
{
  background-color: #001a33;
}
.head
{
  padding:21px;
  background-color:#0077e6;
  height:1%;
  width:69%;
  text-align: left;
}
a
{
text-align: left;
text-decoration: none;
color:white;
font-style:bold;
font-size:30px;


}
ul
{
list-style-type:none;
background-color: white;
color:red;
}
.heading
{

  font-style: bold;
  font-size: 50px;
  float:center;

  height:100%;
    width:70%;
}
div
{
  background-color: white;
  color:#334d4d;
  height:100%;
  width:70%;
  text-align: left;
}
ul
{


  list-style-type: none;
  height:16%;
  width:70%;
  font-color:#2d5986;
}
li
{
    display: inline-block;
    color:#2d5986;
}
h1
{
  background-color: #e6f2ff;
  padding:4px;
  font-size:40px;
  height:10%;
  width:100%;
}
#language
{

  width:250px;
  height:30px;

}
#demo
{
  float:center;
}


</style>
<script type="text/javascript" src="Function.js"></script></head>
<body><center>

  <img class="start" src="logo.jpg"></tr>

  <header class="head"><a  href="http://cl-iiith.vlabs.ac.in/index.html">COMPUTATIONAL LINGUISTICS</a> </header>
  <a style="text-align:left;"href="http://cl-iiith.vlabs.ac.in/index.html">Home></a><a href="http://cl-iiith.vlabs.ac.in/index.html">Computational Linguistic Lab></a><a href="index.html">Forming Sentences -2</a>
  <br>
  <div>
  <h1 style="text-align: left">Forming Sentences - 2</h1>
  <br>

  <ul><li><a style="color:#2d5986;font-size: 20px; text-decoration-line:underline; float:left;" href="introduction.html"><img src="introduction.jpg"><br>INTRODUCTION</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <li><a style="color:#2d5986;font-size: 20px; text-decoration-line:underline; float:left;" href="theory.html"><img src="theory.jpg"><br>THEORY</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
    <li><a  style="color:#2d5986;font-size: 20px; text-decoration-line:underline; float:left;"href="objective.html"><img src="objective.jpg"><br>OBJECTIVE</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
    <li><a style="color:#2d5986;font-size: 20px; text-decoration-line:underline; float:left;"href="index.html"><img src="experiment.jpg"><br>EXPERIMENT</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
    <li><a style="color:#2d5986;font-size: 20px; text-decoration-line:underline; float:left;"href="procedure.html"><img src="procedure.jpg"><br>PROCEDURE</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
    <li><a style="color:#2d5986;font-size: 20px; text-decoration-line:underline; float:left;"href="quizzes.html"><img src="quizzes.jpg"><br>QUIZZES</a></li>
      </ul>
         <h3 style="text-align: left; color:black"> &nbsp;&nbsp;&nbsp;<b>Experiment</b></h3>
      <center>  <select id="language" name="language" onchange="select_language(); reload();">
   <option value="null" >--Select Language--</option>
  <option value="English" >English</option>
  <option value="Hindi">Hindi</option>

</select>
   <h2 style="color:blue" id="demo"></h2>
   <h3 style="color:blue" id="demo1"></h3>
     <p style="color:blue" id="demo2"></p>

       <p style="color:blue" id="demo3"></p>
       <p style="color:blue" id="demo4"></p>
        <p style="color:blue" id="demo5"></p>
        <p style="color:blue" id="demo6"></p>
        <p style="color:blue" id="demo7"></p>
        <p style="color:blue" id="demo8"></p>
        <p style="color:blue" id="demo9"></p>
        <p style="color:blue" id="demo10"></p>
    <p id="output"></p>
</center>
</div>
</center> 
</body> 