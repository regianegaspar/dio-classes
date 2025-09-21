function atacar(){
    let ataque = "";

    let heroi = {
    nome: document.getElementById("nome").value,
    idade: document.getElementById("idade").value,
    tipo: document.getElementById("tipo").value
}

    if (heroi.tipo == "mago") {
        ataque = "magia";
    } else if (heroi.tipo == "guerreiro"){
        ataque = "espada";
    } else if (heroi.tipo == "monge"){
        ataque = "artes marciais";
    } else if (heroi.tipo == "ninja"){
        ataque = "shuriken";
    } else{
        ataque = "arma desconhecida"
    }
    


      document.getElementById("resultado").innerHTML = `O ${heroi.tipo} atacou usando ${ataque}`;
}