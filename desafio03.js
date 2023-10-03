// Definindo a classe de um heroi
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let attack;

        switch (this.type) {
            case 'mago':
                attack = 'Feitico Unico';
                break;
            case 'guerreiro':
                attack = 'Lamina Justa';
                break;
            case 'monge':
                attack = 'Kisami Guiaco';
                break;
            case 'ninja':
                attack = 'Sombra furtiva';
                break;
            default:
                attack = 'Atacando oponente';
        }

        console.log(`O ${this.type} atacou usando ${attack}`);
    }
}

// Criando instâncias da classe Heroi
const hero1 = new Hero('Lufy', 16, 'guerreiro');
const hero2 = new Hero('Dumbedore', 1400, 'mago');
const hero3 = new Hero('Jackie Chan', 63, 'monge');
const hero4 = new Hero('Horono Azoro', 19, 'ninja');

// Chamando o método atacar para cada herói
hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();


/* Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

 
Bons estudos 😉 */