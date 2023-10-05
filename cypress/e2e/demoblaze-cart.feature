#language:pt

Funcionalidade: Demoblaze Adicionar ao carrinho
    Como um usuario do Demoblaze,
    Eu quero poder adicionar e remover produtos meu carrinho de compras,
    Para que eu tenha controle sobre o que eu vou comprar

    Contexto:
    Dado Eu entro na URL Base

    Cenario: Adicionando e removendo do carrinho
    Quando Eu clico no primeiro produto
    E As informaçoes do produto abrem eu clico no botao Add to cart para adicionar o produto no carrinho
    E Eu clico no botao Cart
    Entao O meu carrinho abre e eu clico no botao delete para remover o produto do carrinho