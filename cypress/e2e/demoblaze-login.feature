#language:pt

Funcionalidade: Demoblaze Login
    Como um usuario do Demoblaze,
    Eu quero realizar um cadastro no site,
    Para que eu possa fazer login e realizar compras.

  Contexto:
    Dado Eu entro na URL Base

  Cenario: Cadastro no Demoblaze
    Quando Eu clico no botao Sign up
    E Eu digito "Alyson" no campo username do sign up
    E Eu digito o meu PASSWORD no campo password do sign up
    Entao Eu clico no botao Sign up e realizo o cadastro com sucesso

  Cenario: Login no Demoblaze
    Quando eu clico no botao Log in
    E Eu digito "alyson" no campo username do login
    E Eu digito o meu PASSWORD no campo password do login
    Entao Eu clico no botao Log in e realizo o login com sucesso