//EL INDEX SOLO MUESTRA EL DISEÑO DE LA INFO A LA PAGINA (NO PROCESA)(DEBE SER LO MAS SIMPLE POSIBLE)
//REQUIERO LOS MODULOS DE C/U DE LAS PAGINAS LOS CUALES TIENEN LOS PROCESOS Y METODOS
//HomePage
const homePage = require('./homePage')
//masVotadas
const masVotadas = require('./masVotadas')
//enCartelera
const enCartelera = require('./enCartelera')
//sucursales
const sucursales = require('./sucursales')
//contacto
const contacto = require('./contacto')
//preguntasFrecuentes
const preguntasFrecuentes = require('./preguntasFrecuentes')


module.exports = {
    homePage : function(req,res){
        res.write(`${homePage.titulo}\n${homePage.subtitulo}\n\n`)
        res.write(`𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐩𝐞𝐥𝐢𝐜𝐮𝐥𝐚𝐬: ${homePage.leerJSON().total_movies} \n\n\n`)
        let pelis = homePage.listado()
        pelis.forEach(peliculas => {
           res.write(`- ${peliculas.title}\n\n`) 
        })
        res.write(homePage.pie)
        res.end()
    },
    enCartelera : function(req,res){
        res.write(`${homePage.titulo}\n${enCartelera.titulo}\n\n`)
        res.write(`𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐩𝐞𝐥𝐢𝐜𝐮𝐥𝐚𝐬: ${homePage.leerJSON().total_movies} \n\n\n`)
        pelis.forEach(peliculas=>{
            res.write(`-${peliculas.title}\nSinopsis: ${peliculas.overview}\n\n`)
        })
        res.end()
    },
    masVotadas : function(req,res){
        res.write(`${homePage.titulo}\n${masVotadas.titulo}\n\n`)
        res.write(`𝐓𝐎𝐏 ${masVotadas.total()} 𝐃𝐄 𝐋𝐀𝐒 𝐌𝐄𝐉𝐎𝐑𝐄𝐒 𝐏𝐄𝐋𝐈𝐂𝐔𝐋𝐀𝐒\n𝐋𝐚 𝐯𝐚𝐥𝐨𝐫𝐚𝐜𝐢𝐨́𝐧 𝐠𝐞𝐧𝐞𝐫𝐚𝐥 𝐞𝐬: ${masVotadas.rating()}\n\n`)
        let mejores = masVotadas.masVotadas()
        mejores.forEach(pelicula=>{
            res.write(`-${pelicula.title}\nValoracion: ${pelicula.vote_average}\nSinopsis: ${pelicula.overview}\n\n`)
        })
        res.end()
    },
    sucursales : function(req,res){
        res.write(`${homePage.titulo}\n${sucursales.titulo}\n\n`)
        res.write(`𝐀𝐂𝐓𝐔𝐀𝐋𝐌𝐄𝐓𝐄 𝐂𝐎𝐍𝐓𝐀𝐌𝐎𝐒 𝐂𝐎𝐍 ${sucursales.total()} 𝐒𝐀𝐋𝐀𝐒\n\n𝗩𝗜𝗦𝗜𝗧𝗔𝗡𝗢𝗦 𝗘𝗡:\n`)
        let lista = sucursales.leerJSON().theaters
        lista.forEach(sala=>{
            res.write(`- ${sala.name}\nUbicación: ${sala.address}\n\n${sala.description}\n\n\n`)
        })
        res.end()
    },
    contacto : function(req,res){
        res.write(`${homePage.titulo}\n${contacto.titulo}\n\n`)
        res.write(contacto.mensaje)
        res.end()
    },
    preguntasFrecuentes : function(req,res){
        res.write(`${homePage.titulo}\n${preguntasFrecuentes.titulo}\n\n\n`)
        res.write(`𝐓𝐎𝐏 ${preguntasFrecuentes.total()} 𝐃𝐄 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 𝐅𝐑𝐄𝐂𝐔𝐍𝐄𝐓𝐄𝐒:\n\n`)
        let faqs = preguntasFrecuentes.leerJSON().faqs
        faqs.forEach(preg=>{
            res.write(`-  ${preg.faq_title}\n\n${preg.faq_answer}\n\n\n`)
        })
        res.end()
    }
}