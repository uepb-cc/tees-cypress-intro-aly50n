#language:pt

Funcionalidade: Demoblaze Efetuar compra
    Como um usuario do Demoblaze,
    Eu quero poder adicionar um produto no carrinho,
    E preencher os dados necessários para efetuar a compra,
    Para que eu possa finalizar a compra de um produto

    Contexto:
    Dado Eu entro na URL Base

    Cenario: Comprando um produto
    Quando Eu clico no primeiro produto
    E As informaçoes do produto abrem eu clico no botao Add to cart para adicionar o produto no carrinho
    E Eu clico no botao Cart
    E O meu carrinho abre entao clico no botao Place Order
    E Eu preencho os campos no formulario com o nome "Alyson Morato" o estado "Pernambuco" a cidade "Santa Terezinha" o cartao de credito "000" o mes "10" e o ano "2023"
    Entao Eu clico no botao Purchase e OK para finalizar a compra