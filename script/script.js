function login(){

    var form = document.getElementById('login-box')

     if(!form.reportValidity()){
        return
    }
    
    var butao = document.getElementById('butao')
    var usuario = document.getElementById('usuario')
    var senha = document.getElementById('senha')
    var saida = document.getElementById('saida')

     if(usuario.value.trim() == ""){
        usuario.focus()
        return
    }

    if(senha.value.trim() == ""){
        senha.focus()
        return
    }

        if(usuario.value == "admin@gmail.com" && senha.value == "1234"){
            saida.style.display = "block"
            saida.style.color = "#1df67a"
            saida.innerHTML = "Login realizado com sucesso!"
        }
        else{
            saida.style.display = "block"
            saida.style.color = "#f61d1d"
            saida.innerHTML = "Login ou senha incorretos."
        }

 
}