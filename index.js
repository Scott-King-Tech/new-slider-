const slide = ["voiture1.jpg", "voiture2.jpg", "voiture3.jpg", "voiture4.jpg"]

let numero = 0;

function ChangeSlide(sens){
    
    numero = numero + sens;
    if(numero > slide.length - 1)
        numero = 0;
    else if (numero < 0)
        numero = slide.length - 1 ;
   document.getElementById("slide").src= "image/" + slide[numero];
}

setInterval("ChangeSlide(1)", 4000);


