/// <reference types="Cypress" />

const produtoElements = require('../elements/ProdutoElements')
const url = Cypress.config("baseUrl")

class ProdutoElements {
    acessarSite() {
        cy.visit(url)
    }

    buscarProduto(produto) {
        cy.get(produtoElements.ipt_search).type(produto);
        cy.get(produtoElements.btn_search).click();
    }
  
    visualizarProduto(produto) {
        cy.get(produtoElements.a_nomeProduto).should('contain', produto)
    }
}

export default ProdutoElements;