
function init(){
    document.getElementById("url").addEventListener('change',link)
    document.getElementById("meretpt").addEventListener('input',meretpt)
    document.getElementById("meretem").addEventListener('input',meretem)
    document.getElementById("szin").addEventListener('input',szin)
    document.getElementById("baljobb").addEventListener('click',baljobb)
    

    console.log("zsa");
}
function link(){
    let url = document.getElementById('url').value;
    document.getElementById('kep').src = url;
} 
function meretpt(){
let meretpt = document.getElementById('meretpt').value;
document.getElementById('szoveg').style.fontSize = meretpt + 'pt';
}
function meretem(){
let meretem = document.getElementById('meretem').value;
document.getElementById('szoveg').style.lineHeight = meretem +'em' ;
}
function szin (){
 let szin = document.getElementById('szin').value;
 document.getElementById('szoveg').style.color = szin;
}
function baljobb(){
var kep = document.getElementById('kep');
kep.classList.toggle('jobb');
}



document.addEventListener("DOMContentLoaded",init);


