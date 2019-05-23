//Pareja:
//Maria del Mar Martinez -  Valeria Ramirez

var express = require('express');

var hbs = require('express-handlebars');

var fs = require('fs');

var app = express();

//para definir la carpeta publica
app.use(express.static('public'));
//para registrar el motor de render handlebars
app.engine('handlebars', hbs());
//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');

// iniciar el servidor
app.listen(3000);
console.log('escuchando en el puerto 3000!');

//contadores
var home = 0;
var sobreNosotros = 0;
var contacto = 0;

//funcion para guardar numero visitas en archivo
function contarVisitas() {

    var mensaje= "Pagina inicio:"+ home + "visitas\n" + "Sobre nosotros: " + sobreNosotros+ "visitas\n"+ "Contacto:" + contacto + "visitas";
 
    console.log("Home Page: "+home+" visitas");
    console.log("sobre nosotros: "+sobreNosotros+" visitas");
    console.log("contacto: "+contacto+" visitas");
    

    fs.writeFile('message.txt', mensaje, function (err) {
        if (err) throw err;
        console.log('Guardado!');
      });

}

app.get('/', function (request, response) {

    response.render('home');
    home++;
    contarVisitas();


});

app.get('/sobreNosotros', function (request, response) {

    response.render('nosotros');
    sobreNosotros++;
    contarVisitas();


});

app.get('/contacto', function (request, response) {

    response.render('contacto');
    contacto++;
    contarVisitas();


});