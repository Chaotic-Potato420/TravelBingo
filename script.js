var trad = 0;
var four = 0;
var black = 0;

function trad1(){
    window.location.replace("two.html")
    trad += 1;
    localStorage.setItem("vOneLocalStorage", trad);  
}
function four1(){
    window.location.replace("four.html")
    four += 1;
    localStorage.setItem("vTwoLocalStorage", four);  
}
function black1(){
    window.location.replace("black.html")
    black += 1;
    localStorage.setItem("vThreeLocalStorage", black);  
}
