let contenedor = document.getElementById('contenedor')
const semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

const dia = new Date();
let dias = semana[dia.getDay()]

const diaNum = new Date()
let diasNum = diaNum.getDate()

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

const month = new Date()
let months = meses[month.getMonth()]

const hora = new Date()
let horaAhora = hora.toLocaleTimeString('es-CL')


const annio = new Date();
let annios = annio.getFullYear()
contenedor.innerHTML = '' + dias + '  ' +diasNum + " de " + months + "" +  annios  +  '-'  + horaAhora