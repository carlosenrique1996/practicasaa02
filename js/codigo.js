//let numero=5; //declarando
//numero=56; //inicializar la variable
//let frase="este una var de texto";
//let sexo=true;
//const pi=3.141516;

//alert(numero*frase);

// se ingresa un numero entero , mostrar su raiz cuadrada
// let numero;


// numero=prompt("Ingrese un numero");

//numero--; //numero=numero+1;     ++ incrementa -- resta de 1 en 1

// let raiz=numero**(1/2);

// document.write("la raiz de "+numero+" es " +raiz);

/*

let nota1;
let nota2;
let nota3;
let ptje;
let prom;

nota1=parseInt(prompt("ingrese primer numero: "));
nota2=parseInt(prompt("ingrese segundor numero: "));
nota3=parseInt(prompt("ingrese tercer numero: "));

ptje=nota1+nota2+nota3;
prom=ptje/3

document.write("El puntaje obtenido es: "+ptje+"<br>");
document.write("El promedio es: "+ prom); 



let n="diez";
let a="Diez";

document.write(n===a); 

let n=9;
let a=5;
document.write(""n+a+(n+a)); */

/*
nombre=window.prompt("Ingrese nombre del cliente: ");

let nombreproducto1=parseInt(prompt("Ingrese el nombre del primer producto: "));
let nombreproducto2=parseInt(prompt("Ingrese nl nombre del segundo producto: "));
let nombreproducto3=parseInt(prompt("Ingrese el nombre del tercer producto: "));
let nombreproducto4=parseInt(prompt("Ingrese el nombre del cuarto producto: "));
let nombreproducto5=parseInt(prompt("Ingrese el nombre del quinto producto: "));

let producto1=parseInt(prompt("Ingrese precio del arroz: "));
let producto2=parseInt(prompt("Ingrese precio de la lenteja: "));
let producto3=parseInt(prompt("Ingrese precio del frejol "));
let producto4=parseInt(prompt("Ingrese precio del azucar: "));
let producto5=parseInt(prompt("Ingrese precio de la quinua: "));
let totalcompra=producto1+producto2+producto3+producto4+producto5;
let igv=totalcompra*0.18;
let ventafinal=totalcompra+igv

document.write("El cliente: "+nombre+"<br>");
document.write("Hace la compra de 5 productos que suma un total de: "+totalcompra+"<br>");
document.write("Y el igv de 18% es: "+igv+"<br>");
document.write("El monto total a pagar es de: "+ventafinal)

*/


// se tiene un numero , saber si es positivo
/*let num=-5;

if(num==0){
    alert("es neutro");
}else if(num>0){
    alert("es positivo");
}else if(num<0){
    alert("es negativo");
}   */

//se ingresa tres notas de un alumno , mostrar el promedio y si su promedio esta entre 
//17 y 20 que salga excelente , si esta entre 13 y 16 que salga regular y si es menor a 13 que salga deasprobado
/*let numero1;
let numero2;
let numero3;

numero1=parseFloat(prompt("Ingrese la primera nota"));
numero2=parseFloat(prompt("Ingrese la primera nota"));
numero3=parseFloat(prompt("Ingrese la primera nota"));

let prom=(numero1+numero2+numero3)/3;

if(prom>=17 && prom<=20){
    document.write(`El promedio es ${prom} tiene promedio excelente`);
}else if(prom>=13 && prom<=16){
    document.write(`El promedio es ${prom} y usted esta regular`);
}else if(prom<13){
    document.write(`El promedio es ${prom} y usted esta desaprobado`);
}else{
    document.write("Ingreso datos incorrectos");
} */



/*

let empresa=prompt("ingrese la empresa a la cual desea llamar: ");
let costo=parseFloat(prompt("Ingrese costo x min de llamada: "));
let minutos=parseFloat(prompt("cuanto minutos desea hablar: "));
let fijo=0.20;
let claro=0.40;
let movistar=0.60;
let entel=1;
let total=costo*minutos;

if(fijo=minutos*0.20){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(claro=minutos*0.40){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(movistar=minutos*0.60){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(entel=minutos*1){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}    */




/*for(let i=1;i<=6;i++){
     document.write("<h"+i+">hola etiqueta</h"+i+">");
   //document.write(`<h${i}>hola etiqueta</h${i}>`);
}            ++    DE 1 EN 1         */


/*for(let i=2;i<=20;i+=2){
    document.write(i+"<br>")
}      +=    DE VARIOS EN VARIOS          */

/*
for(let i=1;i<=20;i++){
    
    if(i==15){ 
        continue;//break;                        FORRR
    }
    document.write(i+"<br>");
}                            */


/*
let k=3;
while(k<=30){
    document.write(k);                        WHILEEEEEEE
    k+=3;
}                           */


/*
let k=0;
do{
    document.write("iteraccion con do while<br>");   DO WHILEEE
    k++;
}while(k>10);                 */    


/*
let k=1;
let acum=0;
do{
    acum=acum+k;                                    DO WHILEEE
    k++;
}while(k<=20);
document.write(acum);        */


/*
function saludar(){
    alert("Bienvenido a las funciones");     FUNCION SIN ARGUMENTOS
}

saludar(); */


/*
function saludar2(nombre){
    alert("Bienvenidoa a las funciones "+nombre);    FUNCION CON ARGUMENTOS
}
let nom=prompt("Ingrese tu nombre");
saludar2(nom);                        */


/*
let multiplica=function(numero1,numero2){
    let n1=numero1;
    let n2=numero2;
    let multi=n1*n2;                      FUNCION ANONIMA (MULTI)
    return multi;
}
document.write(multiplica(8,5));    ¨ */




/*
function sumar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum=num1+num2;
    document.getElementById("resp").innerHTML=sum;
}
function restar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let restar=num1-num2;
    document.getElementById("resp").innerHTML=restar;
}
function multiplica(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let multiplica=num1*num2;
    document.getElementById("resp").innerHTML=multiplica;
}
function divide(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let divide=num1/num2;
    document.getElementById("resp").innerHTML=divide;
}
function potencia(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let potencia=num1**num2;
    document.getElementById("resp").innerHTML=potencia;
}
function limpiar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("resp").innerHTML=""; 
}
function muestraFecha(){
    let fecha;
    fecha=new Date();
    let cadena=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    return cadena;
}
document.getElementById("fecha").innerHTML=muestraFecha();

function muestraHora(){
    let hora;
    hora=new Date();
    let cadena=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    return cadena;
}
document.getElementById("hora").innerHTML=muestraHora();    */

/*

let ciudad=["Lima","Arequipa","Trujillo","zarate","cusco",];
console.log(ciudad);
document.write(ciudad+"<br>");
document.write(ciudad.length+"<br>");
ciudad[3]="Lambayeque";
document.write(ciudad+"<br>");

ciudad.push("Cusco","Puno");
document.write(ciudad.push());

ciudad.pop();                               borra los primeros elementos
document.write(ciudad.pop()+"<br>");        muestra el ultimo elemento

ciudad.unshift("Piura");

ciudad.shift();
document.write(ciudad);    */

/*
ciudad.reverse();
document.write(ciudad+"<br>");
let numeros=[];           */

/*
numeros[0]=8;
numeros[1]=2;
numeros[2]=45;
numeros[3]=1;
numeros[4]=9;         */

/*
let numeros=[]; 

let num=prompt("Cuantos valores desea ingresar al Array?");
for(let i=0;i<num;i++){
    numeros[i]=prompt("ingrese valores:");
}

document.write(numeros+"<br>");

const fc=function(a,b){
    return a-b
}

numeros.sort(fc);

document.write(numeros);     */


const tiempo=document.getElementById(`tiempo`);
const dato=document.getElementById(`dato`);

const monthNames=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agostp", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

const interval=setInterval(()=>{
  const local=new Date();

  let day=local.getDate(),
  month=local.getMonth(),
  year=local.getFullYear();

  tiempo.innerHTML=local.toLocaleTimeString();
  dato.innerHTML=`${day}${monthNames[month]}${year}`;

}, 1000);


let i=0;
let Iniciar;
function Cronometro(){
i++;
let Cen=i;

let iCen=Cen%100;
let iSeg=Math.round((Cen-50)/100);
let iMin=Math.round((iSeg-30)/60);
iSeg=iSeg%60;

let sCen=""+((iCen>9)?iCen:"0"+iCen);
let sSeg=""+((iSeg>9)?iSeg:"0"+iSeg);
let sMin=""+((iMin>9)?iMin:"0"+iMin);

contador.innerHTML=(sMin+":"+sSeg+":"+sCen);
}
function IniciarCronometro(){
    DetenerCronometro();
    contador.innerHTML=("00:00:00");
}
function ComenzarCronometro(){
    if (i!==0){return;}
    Iniciar=setInterval(Cronometro,10);
}
function DetenerCronometro(){
    clearInterval(Iniciar);
    i=0;
}
































