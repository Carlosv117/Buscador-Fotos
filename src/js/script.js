//Variavel Global
let lat = "-25.4284";
let lon = "-49.2733";
let imagemData = "";
let titleData = "";
let valorText = "cachorros";
let result = [];
let forData = "";
let clickPassar = 0;
let clickVoltar = 0;
//Variavel Global


// DOM
function pesquisarImg(){
    const buttonPesquisar = document.querySelector("#buttonPesquisar")
    const textPesquisar = document.querySelector("#textPesquisar")

    const ButtonPassar = document.querySelector("#passar")
    const ButtonVoltar = document.querySelector("#voltar")

    const aPessoas = document.querySelector("#Pessoas")
    const aDecorações = document.querySelector("#Decorações")
    const aHomeOffice = document.querySelector("#HomeOffice")

    buttonPesquisar.addEventListener("click", () => {

        if(textPesquisar.value !== "Digite aqui o termo"){
            valorText = textPesquisar.value;
            gerandoImagem()
        }
        if(textPesquisar.value == "Digite aqui o termo"){
            alert("Pesqusie por algo!")
        }

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
        valorText = "avião";
        gerandoImagem()
    })
}
pesquisarImg()

//Implementando Imagem e Titulo
function implementandoImg(){
    const imgGerada = document.querySelector(".imgGerada");
    imgGerada.src = imagemData;
}
function implementandoTitle(){
    const title = document.querySelector("#title")
    title.innerText = titleData;
}
// DOM


//Loop da imagens
function forImagens(value){
    result = [];
    for(let i = 0; i < value.length; i++){
        result.push(value[i]);
    }
    
    if(result[0 + clickPassar + clickVoltar] == undefined){
        clickPassar = 0;
        clickVoltar = 0;
        return result[0];
    }
    return result[0 + clickPassar + clickVoltar];
    
}

//Geolocalização / Gerar Imagem
function gerandoImagem(){
    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude; 
            lon = position.coords.longitude;
        });
    
    } else {
    
        lat = "-25.4284";
        lon = "-49.2733";
    
    }

    fetch(`https://www.flickr.com/services/rest/?api_key=1a0a0bb1c1430d29dd6069b904407db9&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${lat}&lon=${lon}&text=${valorText}`)
        .then(resp => resp.json())
        .then(data => {

            forData = forImagens(data.photos.photo)
            imagemData = constructImageURL(forData)
            titleData = constructTitle (forData)

            implementandoImg()
            implementandoTitle()

        })  

}
gerandoImagem()
//Geolocalização / Gerar Imagem

//construindo URL da imagem
function constructImageURL (photoObj) {
    return "https://farm" + photoObj.farm +
        ".staticflickr.com/" + photoObj.server +
        "/" + photoObj.id + "_" + photoObj.secret + ".jpg";
}

//construindo titulo da imagem
function constructTitle (titleObj) {
    return titleObj.title;
}