// Solicita ao cliente a escolha da bebida
let bebida = prompt("Escolha sua bebida: café, leite ou chá");

// Variável que armazenará o valor da bebida
let valor = 0;

// Estrutura de decisão switch para avaliar a escolha da bebida
switch (bebida.toLowerCase()) {  // .toLowerCase() converte a string para minúsculas, facilitando a comparação
    case "café":
        valor = 3.55;
        alert(`Você escolheu Café. O valor é R$ ${valor.toFixed(2)}.`);
        break;
    case "leite":
        valor = 2.86;
        alert(`Você escolheu Leite. O valor é R$ ${valor.toFixed(2)}.`);
        break;
    case "chá":
        valor = 2.33;
        alert(`Você escolheu Chá. O valor é R$ ${valor.toFixed(2)}.`);
        break;
    default:
        alert("Escolha inválida. Por favor, escolha entre café, leite ou chá.");
        break;
}

// Exibe a escolha da bebida no console
console.log(`Bebida escolhida: ${bebida}`);
