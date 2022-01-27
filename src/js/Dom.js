class Pesquisar{
    constructor(){}

    pesquisarImg(){
        const buttonPesquisar = document.querySelector("#buttonPesquisar")
        const textPesquisar = document.querySelector("#textPesquisar")

        const ButtonPassar = document.querySelector("#passar")
        const ButtonVoltar = document.querySelector("#voltar")

        const aPessoas = document.querySelector("#Pessoas")
        const aDecorações = document.querySelector("#Decorações")
        const aHomeOffice = document.querySelector("#HomeOffice")

        buttonPesquisar.addEventListener("click", function(){
            if(textPesquisar.value !== "Digite aqui o termo"){
                valorText = textPesquisar.value;
                gerandoImagem()
            }
            if(textPesquisar.value == "Digite aqui o termo"){
                alert("Pesqusie por algo!")
            }
            // else{
            //     alert("Palavra não encontrada!")
            //     location.reload();
            // }

        })

        ButtonPassar.addEventListener("click", function(){
            clickPassar += 1;
            gerandoImagem()
        })
        ButtonVoltar.addEventListener("click", function(){
            clickPassar -= 1;
            gerandoImagem()
        })

        aPessoas.addEventListener("click", function(e){
            e.preventDefault()
            valorText = "gato";
            gerandoImagem()
        })
        aDecorações.addEventListener("click", function(e){
            e.preventDefault()
            valorText = "casa";
            console.log(valorText)
            gerandoImagem()
        })
        aHomeOffice.addEventListener("click", function(e){
            e.preventDefault()
            valorText = "trabalho";
            gerandoImagem()
        })
        }
}

module.exports = Pesquisar