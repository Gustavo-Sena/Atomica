var btn_entrar = document.querySelector("#btn_entrar");

var btn_cadastrar = document.querySelector("#btn_cadastrar");

var body = document.querySelector("body");

btn_entrar.addEventListener("click", function(){
    body.className = "ENTRAR-js";
});

btn_cadastrar.addEventListener("click", function(){
    body.className = "CADASTRAR-js"
})

function cadastrar(){
    var senha = ipt_senha.value
    var conf_senha = ipt_conf_senha.value

    if(senha == conf_senha){
        alert("TUDO CERTO!")
    }
    else{
        alert(`A confirmação da senha está diferente da senha inicial`)
    }
}