import {Api} from "./Api.js"
const Api = require("./Api")

class Busca{
    constructor(){}

    async realizarPesquisa(){
        const api              = new Api()
        const resultRequisicao = await api.getImagens()

        console.log(resultRequisicao);
        // return resultRequisicao;
    }

    
}


module.exports = Busca