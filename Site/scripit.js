// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        if (!nome || !idade || !cargo) {
            throw new Error("Nome, idade e cargo são obrigatórios.");
        }
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        if (!departamento) {
            throw new Error("Departamento é obrigatório para gerentes.");
        }
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        if (!linguagem) {
            throw new Error("Linguagem é obrigatória para desenvolvedores.");
        }
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erro
function exibirErro(mensagem) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = mensagem;
    errorDiv.style.color = 'red';
}

// Função para lidar com o formulário
document.getElementById('funcionarioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    try {
        let gerente, desenvolvedor;

        // Cria instâncias baseadas nos dados do formulário
        if (departamento) {
            gerente = new Gerente(nome, idade, cargo, departamento);
            document.getElementById('result').innerHTML += `<p>${gerente.seApresentar()}</p>`;
            document.getElementById('result').innerHTML += `<p>${gerente.trabalhar()}</p>`;
            document.getElementById('result').innerHTML += `<p>${gerente.gerenciar()}</p>`;
        }

        if (linguagem) {
            desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
            document.getElementById('result').innerHTML += `<p>${desenvolvedor.seApresentar()}</p>`;
            document.getElementById('result').innerHTML += `<p>${desenvolvedor.trabalhar()}</p>`;
            document.getElementById('result').innerHTML += `<p>${desenvolvedor.programar()}</p>`;
        }

        if (!departamento && !linguagem) {
            throw new Error("Pelo menos um tipo de funcionário (Gerente ou Desenvolvedor) deve ser selecionado.");
        }

    } catch (error) {
        exibirErro(error.message);
    }
});
