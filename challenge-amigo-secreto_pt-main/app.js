let listaDeAmigos = [];


function adicionarAmigo() {
      let amigo = document.querySelector('input').value;
      if (amigo !== '') {
            listaDeAmigos.push(amigo);
            exibirAmigos();
            limparCampo();
      } else {
            alert('Por favor, insira um nome.');
      }
      console.log(listaDeAmigos);
}
function exibirAmigos() {
      let lista = document.querySelector('ul');
      lista.innerHTML = '';
      listaDeAmigos.forEach((amigo) => {
            let li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
      });
}
function limparCampo() {
      document.querySelector('input').value = '';
}
function sortearAmigo() {
      let amigoSortedo = Math.floor(Math.random() * listaDeAmigos.length);
      let amigo = listaDeAmigos[amigoSortedo];
      let mensagem = `O amigo sorteado foi ${amigo}`;
      let mensagemDeFinalizacao = 'Todos os amigos foram sorteados!';
      exibirTextoNaTela(mensagem);
      console.log(amigo);
      if (listaDeAmigos.includes(amigoSortedo)) {
            return sortearAmigo();
      } else if (listaDeAmigos.length === 0) {
            exibirTextoNaTela(mensagemDeFinalizacao);
            reiniciarSorteio();

      }
      listaDeAmigos.splice(amigoSortedo, 1);
      console.log(listaDeAmigos);
      function exibirTextoNaTela(texto) {
            let mensagem = document.getElementById('resultado');
            mensagem.innerHTML = texto;
      }
}
function reiniciarSorteio() {
      listaDeAmigos = [];
      exibirAmigos();
}
