const form = document.querySelector("#form");                       //pegando as mensagens de erro pelo id
const erroNome = document.getElementById("erroNome");               
const erroEmail = document.getElementById("erroEmail");  

const nome = document.getElementById("name");               //pegando os inputs pelo id
const email = document.getElementById("email");

const erroMsg = "*Campo Obrigatório*"           //mensagem de erro a ser exibida

form.addEventListener('submit', function(event){        //adicionando um "escutador" ao botao submit
    event.preventDefault();         //evitando que a pagina se atualize.


    //inicio da condicional (se o input estiver vazio, que apareça a mensagem de erro; do contrário, esconda a mensagem de erro)
    if(nome.value===''){
        erroNome.style.visibility = 'visible'
        erroNome.textContent = erroMsg
    }else{
        erroNome.style.visibility = 'hidden'
    };

    if(email.value===''){
        erroEmail.style.visibility = 'visible'
        erroEmail.textContent = erroMsg
    }else{
        erroEmail.style.visibility = 'hidden'
    };

    if(nome.value!='' && email.value!=''){
        sucess.textContent = "Sucesso!";             //alterando o texto exibido dentro do span de sucesso (em caso de tudo estar preenchido)
        sucess.style.color = "#05f805";              //alterando a cor a ser exibida para o texto.

        sucess.style.visibility = 'visible';
        erroNome.style.visibility = 'hidden';
    }
}
)