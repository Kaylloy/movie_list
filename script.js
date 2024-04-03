function adicionarFilme() {
    var filmeImagem = document.getElementById("filme").value;
    var filmeTrailer = document.getElementById("trailer").value;
    var elementoListaFilmes = document.getElementById("listaFilmes");
  
    if (filmeImagem.endsWith("jpg")) {
      elementoListaFilmes.innerHTML =
        elementoListaFilmes.innerHTML +
        "<a href=" +
        filmeTrailer +
        "target='_blank'>" +
        "<img src=" +
        filmeImagem +
        ">";
    } else {
      alert(
        "Favor verificar se a imagem esta em jpg, \n Vou inserir um exemplo: click novamente em ADICIONAR."
      );
    }
  }