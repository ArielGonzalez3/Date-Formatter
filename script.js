const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

// new inicia el objeto Date en la constante date
const date = new Date();

// .getDate() es un metodo del objeto Date que devuelve un numero entre el 1 y 31 (dias del mes)
const day = date.getDate();

// .getMonth() metodo que devuelve un numero entre el 0 y 11 (mes del año comienxa con indice 0)
const month = date.getMonth() + 1;

// .getFullYear metodo que retorna el numero del año
const year = date.getFullYear();