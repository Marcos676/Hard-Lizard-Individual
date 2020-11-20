//EL ROUTER SOLO DERIVA LA INFO DE CADA PAGINA DESDE INDEX AL ENTRY POINT
const index = require('./src/index')//Requiero Index

//El router recibe la req y res para emitir la respuesta correspondiente c/ caso mediante un SWITH
module.exports = function (req, res) {
    switch (req.url) {//El swith recibe como parametro el url
        case '/':
            //Homepage
            index.homePage(req, res)
            break;
        case '/en-cartelera':
            //Cartelera
            index.enCartelera(req, res)
            break;
        case '/mas-votadas':
            //MasVotadas
            index.masVotadas(req, res)
            break;
        case '/sucursales':
            //Sucursales
            index.sucursales(req, res)
            break;
        case '/contacto':
            //Contacto
            index.contacto(req, res)
            break;
        case '/preguntas-frecuentes':
            //Preguntas Frecuentes
            index.preguntasFrecuentes(req, res)
            break;
        default:
            res.end('𝟒𝟎𝟒 𝐧𝐨𝐭 𝐟𝐨𝐮𝐧𝐝')
            break;
    }
}

