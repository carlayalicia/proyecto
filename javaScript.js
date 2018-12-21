
var hoy=new Date();
		var dia=hoy.getDay();
		var h= hoy.getHours();
		var m=hoy.getMinutes();
		var s= hoy.getSeconds();
		var mes=hoy.getMonth();
		
function f1(){ //Resaltar dia 
	hoy = new Date();
	dia= hoy.getDay();
	dia=4;
	document.getElementsByTagName('td')[dia].style.border="4px solid black";
	}
	
	
function cambiar(tarea){ //al presionar, x cambiará a v para indicar que la tarea se ha realizado
	var estado = document.getElementById(tarea);
		if(estado.innerHTML === "[v]"){
			estado.innerHTML = "[x]";
			estado.style.color = '#FF0000';
		}else{
			estado.innerHTML = "[v]";
			estado.style.color = '#00FF00';
			}
}


function f3(){ //cambiamos el estilo (señalamos) la asignatura
			for(var i=0; i<3; i++){
				document.getElementsByClassName("TIC")[i].style.color="orange";
				document.getElementsByClassName("TIC")[i].style.fontStyle="italic";
				document.getElementsByClassName("TIC")[i].style.borderRadius="25px";
			}
}

function f4(){
			for(var i=0; i<4; i++){
				document.getElementsByClassName("TI")[i].style.color="blue";
				document.getElementsByClassName("TI")[i].style.fontStyle="italic";
				document.getElementsByClassName("TI")[i].style.borderRadius="25px";
			}
}

function f5(){
			for(var i=0; i<4; i++){
				document.getElementsByClassName("Dib")[i].style.color="pink";
				document.getElementsByClassName("Dib")[i].style.fontStyle="italic";
				document.getElementsByClassName("Dib")[i].style.borderRadius="25px";
			}
}

function f6(){
			for(var i=0; i<4; i++){
				document.getElementsByClassName("Hst")[i].style.color="green";
				document.getElementsByClassName("Hst")[i].style.fontStyle="italic";
				document.getElementsByClassName("Hst")[i].style.borderRadius="25px";
			}
}

function f7(){
			for(var i=0; i<4; i++){
				document.getElementsByClassName("Mate")[i].style.color="yellow";
				document.getElementsByClassName("Mate")[i].style.fontStyle="italic";
				document.getElementsByClassName("Mate")[i].style.borderRadius="25px";
			}
}

function f8(){
			for(var i=0; i<4; i++){
				document.getElementsByClassName("Lng")[i].style.color="purple";
				document.getElementsByClassName("Lng")[i].style.fontStyle="italic";
				document.getElementsByClassName("Lng")[i].style.borderRadius="25px";
			}
}

function f9(){
			for(var i=0; i<3; i++){
				document.getElementsByClassName("Ing")[i].style.color="white";
				document.getElementsByClassName("Ing")[i].style.fontStyle="italic";
				document.getElementsByClassName("Ing")[i].style.borderRadius="25px";
			}
}


function f10(){
			for(var i=0; i<4; i++){
				document.getElementsByClassName("Fsc")[i].style.color="grey";
				document.getElementsByClassName("Fsc")[i].style.fontStyle="italic";
				document.getElementsByClassName("Fsc")[i].style.borderRadius="25px";
			}
}


function f20(){ //la foto cambia según la estación (mes)
if(hoy.getMonth() == 0) { //0 será Enero, 1 será Febrero...
  document.getElementById("img").src = "invierno.jpg"; //Si el mes es 0, aparecerá la foto de invierno
}
if(hoy.getMonth() == 1) {
  document.getElementById("img").src = "invierno.jpg";
}
if(hoy.getMonth() == 2) {
  document.getElementById("img").src = "invierno.jpg";
}
if(hoy.getMonth() == 3) {
  document.getElementById("img").src = "primavera.jpg";
}
if(hoy.getMonth() == 4) {
  document.getElementById("img").src = "primavera.jpg";
}
if(hoy.getMonth() == 5) {
  document.getElementById("img").src = "primavera.jpg";
}
if(hoy.getMonth() == 6) {
  document.getElementById("img").src = "verano.jpg";
}
if(hoy.getMonth() == 7) {
  document.getElementById("img").src = "verano.jpg";
}
if(hoy.getMonth() == 8) {
  document.getElementById("img").src = "verano.jpg";
}
if(hoy.getMonth() == 9) {
  document.getElementById("img").src = "otoño.jpg";
}
if(hoy.getMonth() == 10) {
  document.getElementById("img").src = "otoño.jpg";
}
if(hoy.getMonth() == 11) {
  document.getElementById("img").src = "invierno.jpg";
}

}

function media(){ //calculamos la nota media
			var nota1=document.getElementById('nota1'); 
			var nota2=document.getElementById('nota2');
			var nota3=document.getElementById('nota3');
			var nota4=document.getElementById('nota4');
			var nota5=document.getElementById('nota5');
			var nota6=document.getElementById('nota6');
			var nota7=document.getElementById('nota7');
			var nota8=document.getElementById('nota8');
			var num=0;
			num=(nota1.value*1 + nota2.value*1 + nota3.value*1 + nota4.value*1 + nota5.value*1 + nota6.value*1 + nota7.value*1 + nota8.value*1)/8;
			var resultado=Math.round(num*10)/10;
			document.getElementById('media').innerHTML=resultado;		
			}

var angle = 0;

function setup() { //Dibujar flores al presionar el ratón (processing)
  createCanvas(710, 400); 
  background(102);
  noStroke();
  fill(0, 102);
}

function draw() {
  if (mouseIsPressed === true) { //al presionar el ratón
    angle += 5;
    var val = cos(radians(angle)) * 12.0;
    for (var a = 0; a < 360; a += 75) {
      var xoff = cos(radians(a)) * val;
      var yoff = sin(radians(a)) * val;
      fill(0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
  }
}




			

		