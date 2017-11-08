function Calculadora(){
document.getElementById("0").addEventListener("click", display0);
document.getElementById("1").addEventListener("click", display1);
document.getElementById("2").addEventListener("click", display2);
document.getElementById("3").addEventListener("click", display3);
document.getElementById("4").addEventListener("click", display4);
document.getElementById("5").addEventListener("click", display5);
document.getElementById("6").addEventListener("click", display6);
document.getElementById("7").addEventListener("click", display7);
document.getElementById("8").addEventListener("click", display8);
document.getElementById("9").addEventListener("click", display9);
document.getElementById("punto").addEventListener("click", displayPunto);
document.getElementById("on").addEventListener("click", displayOn);
document.getElementById("sign").addEventListener("click", displayMenos);
document.getElementById("dividido").addEventListener("click", displayDivicion);
document.getElementById("igual").addEventListener("click", Igual);
document.getElementById("por").addEventListener("click", displayPor);
document.getElementById("menos").addEventListener("click", displayM);
document.getElementById("mas").addEventListener("click", displayMas);

var numero1= 0;
var numero2 = 0;
var resultado=0;
var signo=0;

var hoja = document.createElement('style');
hoja.innerHTML = ".tecla:active{  pointer-events: relative;  padding: 1px;}";
document.body.appendChild(hoja);

function display0() {
    NumeroMostrar(0);
}
function display1() {
    NumeroMostrar(1);
}
function display2() {
    NumeroMostrar(2);
}
function display3() {
    NumeroMostrar(3);
}
function display4() {
    NumeroMostrar(4);
}
function display5() {
    NumeroMostrar(5);
}
function display6() {
    NumeroMostrar(6);
}
function display7() {
    NumeroMostrar(7);
}
function display8() {
    NumeroMostrar(8);
}
function display9() {
    NumeroMostrar(9);
}
function displayOn() {
    Borrar(0);
}
function displayMenos() {
    var str = document.getElementById("display").innerHTML; 
    if(str.substring(0, 1) == "-"){
        var menos = str.substring(1, str.length);
        document.getElementById("display").innerHTML = menos;
    }else if(str != "0"){
        document.getElementById("display").innerHTML = "-"+ str;
    }
}
function displayDivicion(){
        numero1 = document.getElementById("display").innerHTML;    
        document.getElementById("display").innerHTML = "";
        signo=1;
}
function displayPor(){
        numero1 = document.getElementById("display").innerHTML;    
        document.getElementById("display").innerHTML = "";
        signo=2;
}
function displayM(){
        numero1 = document.getElementById("display").innerHTML;    
        document.getElementById("display").innerHTML = "";
        signo=3;
}
function displayMas(){
        numero1 = document.getElementById("display").innerHTML;    
        document.getElementById("display").innerHTML = "";
        signo=4;
}
function displayPunto() {
    NumeroMostrar("",10);
}
//*****************************************************************************************//
function NumeroMostrar(n,p) {
    if(p == "10"){
        if((document.getElementById("display").innerHTML)== "0"){
        document.getElementById("display").innerHTML = "0.";
        }else{
            if(CuentaPunto()==0){
                document.getElementById("display").innerHTML += ".";
            }
        }      
    }
    if((document.getElementById("display").innerHTML)== "0"){
        document.getElementById("display").innerHTML = "";
    }
    if(((document.getElementById("display").innerHTML).length) < 8){
    document.getElementById("display").innerHTML += n;        
    }
}
function Borrar(n) {
    document.getElementById("display").innerHTML = n;
}
function CuentaPunto(){
    var cuenta = 0;
    posicion = document.getElementById("display").innerHTML.indexOf(".");
    while ( posicion != -1 ) {
        cuenta++;
        posicion = document.getElementById("display").innerHTML.indexOf(".",posicion+1);
    }
    return cuenta;
}
function Igual(){
    numero2 = document.getElementById("display").innerHTML;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    switch(signo) {
    case 1:
        resultado = numero1/numero2;
        resultado = String(resultado);
        resultado = resultado.substring(0, 8);
        document.getElementById("display").innerHTML = resultado;
        break;
    case 2:
        resultado = numero1*numero2;
        resultado = String(resultado);
        resultado = resultado.substring(0, 8);    
        document.getElementById("display").innerHTML = resultado;
        break;
    case 3:
        resultado = numero1-numero2;
        resultado = String(resultado);
        resultado = resultado.substring(0, 8);
        document.getElementById("display").innerHTML = resultado;
        break;
    case 4:
        resultado = numero1+numero2;
        resultado = String(resultado);
        resultado = resultado.substring(0, 8);
        document.getElementById("display").innerHTML = resultado;
        break;
    }
}

}
Calculadora();