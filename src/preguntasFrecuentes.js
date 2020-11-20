const fs = require('fs')

module.exports = {
    titulo: `🅟🅡🅔🅖🅤🅝🅣🅐🅢 🅕🅡🅔🅒🅤🅔🅝🅣🅔🅢`,
    leerJSON : function(){
        return JSON.parse(fs.readFileSync('./data/faqs.json', 'utf-8'))
    },
    total: function(){
        return this.leerJSON().total_faqs
    }
}