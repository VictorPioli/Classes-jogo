class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        let ataque;
        if(this.tipo === "mago"){
            ataque = "magia"
        }
        else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }
        else if(this.tipo === "guerreiro") {
            ataque = "espada"
        }
        else if (this.tipo === "monge") {
            ataque = "artes marciais"
        }
        console.log(`O tipo ${this.tipo} atacou usando ${ataque}`)
    }
}

let mago = new Heroi ("Stephen Strange", 33, "mago")
let ninja = new Heroi ("Sasuke", 32, "ninja")
let guerreiro = new Heroi ("Garen", 25, "espada")
let monge = new Heroi ("Cholel", 60, "artes marciais")

mago.ataque()
ninja.ataque()
guerreiro.ataque()
monge.ataque()

