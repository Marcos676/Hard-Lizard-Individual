const lista = require('./homePage').listado()

module.exports = {
    titulo: `🅜🅐🅢 🅥🅞🅣🅐🅓🅐🅢`,
    masVotadas: function () {
        return lista.filter(function (peliculas) {
            return peliculas.vote_average >= 7
        })
    },
    total: function () {
        return this.masVotadas().length
    },
    rating: function () {
        let valor = this.masVotadas().map(peli=>peli.vote_average)//extraigo los valores y los guardo en un array
        let promedio = valor.reduce((acum, val)=>acum + val)//suma los valores y guardo el resultado
        return (promedio / valor.length).toFixed(2)//divido el resultado por la longitud del array del total de valores y lo redusco a 2 decimales
    }
}
