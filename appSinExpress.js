const http = require('http')

http.createServer((req, res) => {

    //Configurar que la respuesta sea un adjunto:
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //Content-Type permite indicar en que formato se va a enviar la respuesta
    res.writeHead(200, {'Content-Type': 'application/csv'})
    // res.writeHead(200, {'Content-Type': 'application/json'})

    // const persona = {
    //     id: 1,
    //     nombre: 'Benito'
    // }
    // res.write(JSON.stringify(persona))
    res.write('id, nombre\n')
    res.write('1, Benito\n')
    res.write('2, Mónica\n')
    res.write('3, Jorge\n')
    res.write('4, Alba\n')

    res.end()
})
.listen(8080)

console.log('Escuchando el puerto', 8080)