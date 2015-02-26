function concatenar (ope){ 

   {
      pantalla=document.getElementById("textoPantalla").innerHTML = document.getElementById ("textoPantalla").innerHTML+ope; 
   }
}

document.onkeydown = teclado;  //función teclado disponible



function igualar() { 

         document.getElementById("textoPantalla").innerHTML=eval(document.getElementById("textoPantalla").innerHTML);
            
        }

function raizc() {
         x=Math.sqrt(x) //resolver raíz cuadrada.
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         pantalla2.innerHTML= "√"; //mostrar en pantalla la operacion
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }

function porcent() { 
         x=x/100 //dividir por 100 el número
         pantalla.innerHTML=x; //mostrar en pantalla
         pantalla2.innerHTML= "%"; //mostrar en pantalla la operacion
         igualar() //resolver y mostrar operaciones pendientes
         xi=1 //reiniciar la pantalla
         }


function retro(){ //Borrar sólo el último número escrito.
         x=document.getElementById("textoPantalla").innerHTML
         cifras=x.length; //hayar número de caracteres en pantalla
         br=x.substr(cifras-1,cifras) //info del último caracter
         x=x.substr(0,cifras-1) //quitar el ultimo caracter
         if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
         if (br==".") {coma=0;} //Si hemos quitado la coma, se permite escribirla de nuevo.
         pantalla=document.getElementById("textoPantalla").innerHTML = document.getElementById ("textoPantalla").innerHTML = x; 
         
         }

function borradoTotal() {
          pantalla=document.getElementById("textoPantalla").innerHTML = document.getElementById ("textoPantalla").innerHTML = "";
        
         }

function pi() {
         x= 3.14159265 //resolver el seno 
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }

function sen() {
         x=Math.sin(x) //resolver el seno 
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         pantalla2.innerHTML= "Seno"; //mostrar en pantalla la operacion
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }

function cos() {
         x=Math.cos(x)//resolver el coseno
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         pantalla2.innerHTML= "Coseno"; //mostrar en pantalla la operacion
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }


function tan() {
         x=Math.tan(x)//resolver el tangente
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         pantalla2.innerHTML= "Tangente"; //mostrar en pantalla la operacion
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }

function arctg() {
         x=Math.atan(x)//resolver el arcotangente
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         pantalla2.innerHTML= "Arcotangente"; //mostrar en pantalla la operacion
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }

function potencia() {
         x=Math.pow(x,2)//resolver la potencia
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         pantalla2.innerHTML= "Potencia"; //mostrar en pantalla la operacion
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }



function teclado (elEvento) { 
         evento = elEvento || window.event;
         k=evento.keyCode; //número de código de la tecla.
         //teclas númericas del teclado alfamunérico
         if (k>47 && k<58) { 
            p=k-48; //buscar número a mostrar.
            p=String(p) //convertir a cadena para poder añádir en pantalla.
            concatenar(p); //enviar para mostrar en pantalla
            }  
         //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
         if (k>95 && k<106) {
            p=k-96;
            p=String(p);
            concatenar(p);
            }


         if (k==110 || k==190) {concatenar(".")} //teclas de coma decimal
         if (k==106) {concatenar('*')} //tecla multiplicación
         if (k==186) {concatenar('*')} //tecla multiplicación
         if (k==107) {concatenar('+')} //tecla suma
         if (k==187) {concatenar('+')}
         if (k==109) {concatenar('-')} //tecla resta
         if (k==189) {concatenar('-')} //tecla resta
         if (k==111) {concatenar('/')} //tecla división
         if (k==32 || k==13) {igualar()} //Tecla igual: intro o barra espaciadora
         if (k==46) {borradoTotal()} //Tecla borrado total: "supr"
         if (k==8) {retro()} //Retroceso en escritura : tecla retroceso.
         }