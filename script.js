document.addEventListener('DOMContentLoaded', function(){

    const botaoDeAcessibilidade = document.getElementById ('botao-acessibilidade')
    const opçõesDeAcessibilidade = document.getElementById ('opçoes-acessibilidade')


    botaoDeAcessibilidade.addEventListener('click',function (){
        botaoDeAcessibilidade.classList.toggle('rotaçao-botao');
        opçõesDeAcessibilidade.classList.toggle('apresenta-lista')
    })


    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const dimunuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte  += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    dimunuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte  -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})