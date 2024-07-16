// importe para acessar a função que está trazendo as informações que estão dentro da lista
import { conectaApi } from "./conectaApi.js";
import { deletaProduto } from "./deletaProduto.js";

// dataAttibutes para isolar os elementos
const lista = document.querySelector("[data-lista]");

//criação do elemento lista e da classe produto
export default function constroiCard(nome, preco, url) {
    const produto = document.createElement("li");
    card.className = "geek__items";
    card.innerHTML = `<div class="card">
                    <img src="${url}" class="produtos" alt="${nome}">
                    <div class="card-container">
                    <div class="card-container--info">
                        <p>${nome}</p>
                        <div class="card-container--value">
                            <p>Preço: R$${preco}</p>
                              </div>
                            <div class="card-container--deleta"><img src="./assets/icons8-lixo.svg" class="lixeira" alt="Ícone de deleção"></div>
                        </div>
                    </div>
                </div>`
              
            return produto;

}

// função criada para consumir as funções do conectaApi
async function listaProduto() {
    try {
    const listaApi = await conectaApi.listaProduto();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.url)))
} catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possíel carregar a lista de produtos</h2>`
 }

}

listaProduto();