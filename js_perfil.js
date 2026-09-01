let livros = JSON.parse(localStorage.getItem("livros")) || [];


let total = livros.length;


let favoritos = livros.filter(function(livro){
    return livro.favorito == true;
}).length;


let lidos = livros.filter(function(livro){
    return livro.status == "Lido";
}).length;


let somaNotas = 0;


livros.forEach(function(livro){

    somaNotas += Number(livro.nota);

});


let media = 0;

if(total > 0){
    media = (somaNotas / total).toFixed(1);
}



let elementoTotal = document.getElementById("totalLivros");
let elementoFavoritos = document.getElementById("totalFavoritos");
let elementoLidos = document.getElementById("totalLidos");
let elementoMedia = document.getElementById("mediaNotas");



if(elementoTotal){
    elementoTotal.innerHTML = total;
}else{
    console.log("Não encontrou totalLivros");
}


if(elementoFavoritos){
    elementoFavoritos.innerHTML = favoritos;
}else{
    console.log("Não encontrou totalFavoritos");
}


if(elementoLidos){
    elementoLidos.innerHTML = lidos;
}else{
    console.log("Não encontrou totalLidos");
}


if(elementoMedia){
    elementoMedia.innerHTML = media;
}else{
    console.log("Não encontrou mediaNotas");
}