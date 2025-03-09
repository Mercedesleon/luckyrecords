var c_images = ["c1p.jpg", "c2p.jpg", "c3p.jpg","c4p.jpg","c10.jpg","c11.jpg","c12.jpg","c13.jpg"];
var d_images = ["d1p.jpg", "d2p.jpg", "d3p.jpg","d10.jpg","d11.jpg","d12.jpg","d121.jpg","d13.jpg"];
var g_images = ["g1p.jpg","g10.jpg","g11.jpg","g12.jpg","g13.jpg","g14.jpg","g15.jpg","g16.jpg","g17.jpg","g18.jpg","g19.jpg"];
var i = 0;
var a = 0;
fondo(0);

function fondo(a) {
if (a>0){ 
    i=i+1;}
else 
    {if (a<0) {i=i-1;}
      }
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");
    var slides = document.getElementById("fotofondo"); 
    var pes = document.getElementsByClassName("sel");
    var imagenes="";
    
    if (pes[1].outerText == "Control") {imagenes=c_images}
    else {
        if (pes[1].outerText == "Grabación") {imagenes=g_images}
        else {imagenes=d_images}
    }
 
    var imagen = "img/"+imagenes[i];
    slides.src=imagen;
    slides.style.visibility="visible";
    if (imagenes.length == 1){
        prev.style.visibility="hidden";
        texto1.style.visibility="visible";
        texto2.style.visibility="visible";
        next.style.visibility="hidden";
        }
    else {
        if (i==0) {
                prev.style.visibility="hidden";
                texto1.style.visibility="visible";
                texto2.style.visibility="visible";
                next.style.visibility="visible";
                a=1;
            }
        else {
            if (i == imagenes.length-1) {
                prev.style.display="visible";
                texto1.style.visibility="hidden";
                texto2.style.visibility="hidden";
                next.style.visibility="hidden";
                a=-1;
                }
            else {
                texto1.style.visibility="hidden";
                texto2.style.visibility="hidden";
                prev.style.visibility="visible";
                next.style.visibility="visible";
                }
            }
        }
    if (pes[1].outerText == "Descanso") {
        texto1.style.visibility="hidden";
        texto2.style.visibility="hidden";
    }
 }