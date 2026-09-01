let livros = JSON.parse(localStorage.getItem("livros")) || [];

let livroEditando = -1;


mostrarLivros();



function adicionarLivro(){

    let nome = document.getElementById("nomeLivro").value;
    let autor = document.getElementById("autorLivro").value;
    let capa = document.getElementById("capaLivro").value;
    let nota = document.getElementById("notaLivro").value;
    let status = document.getElementById("statusLivro").value;


    if(nome == ""){
        alert("Digite o nome do livro.");
        return;
    }


    let novoLivro = {

        nome: nome,
        autor: autor,
        capa: capa,
        nota: nota,
        status: status,
        favorito: false

    };


    if(livroEditando == -1){

        livros.push(novoLivro);

    }else{

        livros[livroEditando] = novoLivro;
        livroEditando = -1;

    }


    salvarLivros();

    mostrarLivros();

    limparFormulario();

}



function mostrarLivros(){

    let lista = document.getElementById("listaLivros");

    lista.innerHTML = "";


    livros.forEach((livro,index)=>{


        lista.innerHTML += `

        <div class="card">


            <img 
            src="${livro.capa}" 
            width="150"
            onerror="this.src='https://via.placeholder.com/150x220?text=Sem+Capa'"
            >


            <h2>
            📖 ${livro.nome}
            </h2>


            <p>
            ✍ ${livro.autor}
            </p>


            <p>
            📚 ${livro.status}
            </p>


            <p>
            ${"⭐".repeat(livro.nota)}
            </p>


            <p>
            ${livro.favorito ? "❤️ Favorito" : "🤍 Não favorito"}
            </p>


            <button onclick="favoritarLivro(${index})">
            ❤️ Favoritar
            </button>


            <br><br>


            <button onclick="editarLivro(${index})">
            ✏ Editar
            </button>


            <button onclick="excluirLivro(${index})">
            🗑 Excluir
            </button>


        </div>

        `;


    });


}



function favoritarLivro(index){

    livros[index].favorito = !livros[index].favorito;


    salvarLivros();

    mostrarLivros();

}



function editarLivro(index){

    let livro = livros[index];


    document.getElementById("nomeLivro").value = livro.nome;

    document.getElementById("autorLivro").value = livro.autor;

    document.getElementById("capaLivro").value = livro.capa;

    document.getElementById("notaLivro").value = livro.nota;

    document.getElementById("statusLivro").value = livro.status;


    livroEditando = index;

}



function excluirLivro(index){

    livros.splice(index,1);


    salvarLivros();


    mostrarLivros();

}



function salvarLivros(){

    localStorage.setItem(
        "livros",
        JSON.stringify(livros)
    );

}



function limparFormulario(){

    document.getElementById("nomeLivro").value="";

    document.getElementById("autorLivro").value="";

    document.getElementById("capaLivro").value="";

}