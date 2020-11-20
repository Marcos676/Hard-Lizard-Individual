const fs = require('fs')

module.exports = {
    leerJSON : function(){
        return JSON.parse(fs.readFileSync('./data/theaters.json','utf-8'))
    },
    titulo: `🅝🅤🅔🅢🅣🅡🅐🅢 🅢🅐🅛🅐🅢`,
    total: function(){
        return this.leerJSON().total_theaters
    },
}