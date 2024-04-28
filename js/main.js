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
    alert("Senhas estao ok!")
}