function conferirsenha(){

    const Senha =  document.querySelector("input[name=Senha]");
    const confirmar_senha = document.querySelector("input[name=confirmar_senha]");

    if(confirmar_senha.value === Senha.value){
        confirmar_senha.setCustomValidity('');
    }else{
        confirmar_senha.setCustomValidity('As senhas não confere ');
    }

}

function senhaok(){
    alert("Cadastro Concluido!!! ")
}

$(document).ready(function(){
    console.log('teste');
    // Captura o clique no botão de alternância de menu
    $('.menu-toggle').click(function(){
        // Alterna a visibilidade do menu
        $('nav ul').slideToggle();
    });

    // Esconde o menu ao redimensionar a janela para desktop
    $(window).resize(function(){
        if($(window).width() > 767) {
            $('nav ul').removeAttr('style');
        }
    });
});

