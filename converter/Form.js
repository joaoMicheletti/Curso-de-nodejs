function Register(){
    var name = document.querySelector("#name").value;  
    var email = document.querySelector("#email").value;
    var contato = document.querySelector("#contato").value;
    var regiao = document.querySelector("#regiao").value;
    var msg = document.querySelector("#ARea").value;

    
    if(name.length == 0){
        alert('Preencha o campo Nome e Sobrenome!')
    } else if(email.length == 0){
        alert('Preencha o campo E-mail!')
    }
    else if(contato.length == 0){
        alert('Preencha o campo Contato!')
    }
    else if(regiao.length == 0){
        alert('Preencha o campo Reguião !')
    }
    console.log(name, email, contato, regiao, msg);
};