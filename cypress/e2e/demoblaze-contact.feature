#language:pt

Funcionalidade: Demoblaze Contact
    Como um usuario do Demoblaze,
    Eu quero poder entrar em contato com o suporte,
    Para que eu possa tirar minhas duvidas ou resolver problemas.

  Contexto:
    Dado Eu entro na URL Base

  Cenario: Contato com o suporte
    Quando Eu clico no botao Contact
    E Eu digito "alyson@gmail.com" no campo de email do formulario
    E Eu digito "Alyson Morato" no campo nome de contato do formulario
    E Eu digito "Teste de mensagem" no campo de mensagem do formulario
    Entao Eu clico no botao Send Message para enviar a mensagem