const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");


card1.addEventListener('mouseover',function(){
    document.documentElement.style.backgroundImage = "url(../imgs/deuslove.jpg)";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.style.filter = "brightness(80%)";
    document.documentElement.style.filter = "blur(10)";
}, false);

card1.addEventListener('mouseout',function(){
    document.documentElement.style.backgroundColor = "#57cc99";
}, false);

card2.addEventListener('mouseover',function(){
    document.documentElement.style.backgroundImage = "url(../imgs/preg.jpg)";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.style.filter = "brightness(80%)";
    document.documentElement.style.filter = "blur(10)";
}, false)