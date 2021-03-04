/* global Given, Then, When */

import ProdutoPage from '../pages/ProdutoPage'
const produtoPage = new ProdutoPage

Given("acesso o site Automation Practice", () => {
    produtoPage.acessarSite();
})

When("busco o produto na barra Search", () => {
    produtoPage.buscarProduto('Faded Short Sleev');
})

Then("devo visualizar o produto desejado", () => {
    produtoPage.visualizarProduto('Faded Short Sleev');
})