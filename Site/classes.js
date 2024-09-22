// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo); // Chama o construtor da classe pai
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo); // Chama o construtor da classe pai
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instâncias de Gerente e Desenvolvedor
const gerente = new Gerente('Alice', 35, 'Gerente de Projetos', 'Tecnologia');
const desenvolvedor = new Desenvolvedor('Bárbara', 38, 'Desenvolvedora Frontend', 'JavaScript');

// Chamando métodos apropriados
gerente.seApresentar(); // Apresenta o gerente
gerente.trabalhar(); // O gerente trabalha
gerente.gerenciar(); // O gerente gerencia

desenvolvedor.seApresentar(); // Apresenta o desenvolvedor
desenvolvedor.trabalhar(); // O desenvolvedor trabalha
desenvolvedor.programar(); // O desenvolvedor programa
