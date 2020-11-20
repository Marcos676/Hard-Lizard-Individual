//APP.JS SOLO COMPLE LA FUNCION DE ABRIR EL SERVIDOR Y LLAMAR AL ENRUTADOR (router)
const http = require('http');
const router = require('./router') //requiero el enrutador ( router )

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // El enrutador(recibiendo los parametros de request y response) se encarga de responder a cada requisito 
    router(req,res) // el enrutador ejecutandose
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));