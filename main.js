const mes = document.getElementById('id-mth');
const diasMes = document.getElementById('id-diasMes');
const flechaDcha = document.getElementById('flechaDcha');
const flechaIzda = document.getElementById('flechaIzda');
const d = new Date();
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];
var mesNumero = d.getMonth();
const mesActual = meses[mesNumero];
const añoActual = d.getFullYear();

flechaDcha.addEventListener('click', mueveMesMas);
flechaIzda.addEventListener('click', mueveMesMenos);

//mes.innerHTML = mesActual;

//Cada vez que cambio el mes tengo que cambiar los días de abajo.
//los días son un grid de divs con cada número, dependiendo del mes de 28, 30 o 31 días.
//los divs se crean dinámicamente
//si llego a Diciembre el siguiente mes sería del siguiente año.
//Si llego a enero, el anterior mes sería  del mes anterior

function mueveMesMas(){
  var mesNuevo = mesNumero + 1;
  if(mesNuevo>12) mesNuevo=1;
  if(mesNuevo<1) mesNuevo=12;
  console.log(mesNuevo, mesNumero);
  mesNumero=mesNuevo;
}

function mueveMesMenos(){
  var mesNuevo = mesNumero -1;
  if(mesNuevo>12) mesNuevo=1;
  if(mesNuevo<1) mesNuevo=12;
  console.log(mesNuevo, mesNumero);
  mesNumero=mesNuevo;
}
