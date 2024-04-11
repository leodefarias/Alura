alert('Bem vindo ao número secreto'); 
let limite = 1000;
let numeroSecreto = parseInt(Math.random() * limite + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${limite}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1) {
//alert(`Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativa`);
//}