 document.addEventListener('DOMContentLoaded', function () {

 const aumentaFonteBotao = document.getElementById('aumentar-fonte');
 const diminuiFonteBotao = document.getElementById('diminuir-fonte');

 let tamanhoAtualFonte = 1;
  
   aumentaFonteBotao.addEventListener('click', function () {
     tamanhoAtualFonte += 0
     document.body.style.fontSize = \${tamanhoAtualFonte}rem``

  })

diminuiFonteBotao.addEventListener('click', function () {
  tamanhoAtualFonte -= 0.1;
  document.body.style.fontSize = \${tamanhoAtualFonte}rem``

  })
const botaoDeAcessibilidade =
document.getElementById('botaoacessibilidade');
const opcoesDeAcessibilidade =
document.getElementById('opcoesacessibilidade');
 botaoDeAcessibilidade.addEventListener('click', () => {
 botaoDeAcessibilidade.classList.toggle('rotacao-botao');
 opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
 })
   alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste');
   })                        
