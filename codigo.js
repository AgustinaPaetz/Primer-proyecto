function mostrarDato () {
    var input=document.getElementById("input dato")
    var parrafo=document.getElementById("resultado");
var total=document.getElementById("total");
parrafo.innertext="el dato ingresado es:"+ input.value +"\n";
suma+=parseInt(input.value);
if(suma>10)
total.innertext=suma;
else 
total.innertext= 'la suma es menor o igual a 10'

}
