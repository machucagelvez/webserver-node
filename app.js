const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express()
const port = process.env.PORT


//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log('Error:', err)});

// Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    //Renderizar la vista que hay en views/home.hbs
    //Las options (segundo argumento de render) se usan para enviar información al página que se renderiza
    res.render('home', {
        nombre: 'Ozzy Osbourne',
        titulo: 'Blizzard of Oz'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Ozzy Osbourne',
        titulo: 'Blizzard of Oz'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Ozzy Osbourne',
        titulo: 'Blizzard of Oz'
    })
})

app.get('*', (req, res) => {
    //Responder con un archivo que está en la ruta especificado como argumento
  res.sendFile(__dirname + '/public/404.html')
})
 
app.listen(port, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${port}`)
})