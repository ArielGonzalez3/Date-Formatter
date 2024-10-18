const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

// new inicia el objeto Date en la constante date
const date = new Date();

// .getDate() es un metodo del objeto Date que devuelve un numero entre el 1 y 31 (dias del mes)
const day = date.getDate();

// .getMonth() metodo que devuelve un numero entre el 0 y 11 (mes del año comienxa con indice 0)
const month = date.getMonth() + 1;

// .getFullYear() metodo que retorna el numero del año
const year = date.getFullYear();

// .getHours() retorna numero de 0 a 23 las horas del dia
const hours = date.getHours();

// .getminutes() metodo que devuelve los minutos de 0 a 59
const minutes = date.getMinutes();

// creacion de constante para formater la fecha con template literals
const formattedDate = `${day}-${month}-${year}`;
// console.log(formattedDate);

// tilizacion de propiedad textConent
currentDateParagraph.textContent = formattedDate;

// Probando metodo .split() encadenado con .reverse() y .join()
// const exampleSentence  = "selur pmaCedoCeerf".split('').reverse().join();
// console.log(exampleSentence);

// Se agrega el evento change para detectar el cambion en el elemento html
dateOptionsSelectElement.addEventListener('change', () => {
  
  // Declaracion switch para comparar la seleccion y reflejar en pantalla
  switch (dateOptionsSelectElement.value) {
    case 'yyyy-mm-dd':
      currentDateParagraph.textContent = formattedDate.split('-').reverse().join('-');
      break;
      // Se declara con un template literals para el casa de mes, dia, año, hora y minuto
      case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
      default:
    currentDateParagraph.textContent = formattedDate;
      }

});