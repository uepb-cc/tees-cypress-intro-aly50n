#language:pt

Funcionalidade: Google Search
  Como um usuario do Google,
    Eu quero realizar uma busca no Google
    Para encontrar o que eu quero por meio das pesquisas estou com sorte e pesquisar

  Contexto:
    Dado Eu entro na URL Base

  Cenario: Busca no Google por UEPB - estou com sorte
    Quando Eu digito "UEPB" na caixa de pesquisa
    E Eu clico no botao "estou com sorte"
    Entao o texto "UEPB" pode ser visto no site "https://uepb.edu.br"

  Cenario: Busca no Google por UEPB
    Quando Eu digito "UEPB" na caixa de pesquisa
    E Eu clico no botao "pesquisar"
    Entao o texto "UEPB" pode ser visto no site "google.com"

  Cenario: Busca no Google por Alyson Morato
    Quando Eu digito "Alyson Morato" na caixa de pesquisa
    E Eu clico no botao "pesquisar"
    Entao o texto "Alyson Morato" pode ser visto no site "google.com"