const slide = ["voiture1.png", "voiture2.png", "voiture3.png"]

let numero = 0;

function ChangeSlide(sens){
    
    numero = numero + sens;
    if(numero > slide.length - 1)
        numero = 0;
    else if (numero < 0)
        numero = slide.length - 1;
   document.getElementById("slide").src= "image/" + slide[numero];
}

setInterval("ChangeSlide(1)", 4000);


