console.log("ola mundo");
confirm("Deseja continuar?");
alert("Começaremos agora nosso treinamento!!");

//Nome Completo//

let nome = prompt("Digite seu nome: ") || "";
let sobrenome = prompt("Digite seu sobrenome: ") || "";

let nomeCompleto = `Seu nome completo é: ${nome} ${sobrenome}`;
let nomeCatalogo = `Seu nome catálogo é: ${sobrenome.toUpperCase()}, ${nome}`;
alert(nomeCompleto);
alert(nomeCatalogo);

//Divisão//

let numerador = prompt("Digite o numerador: ") || 0;
let denominador = prompt("Digite o denominador: ") || 0;

if(denominador === 0) {
    alert("Não é possivel dividir por zero!");
} else {
    let resultado = numerador / denominador;
    alert(`${numerador} dividido por ${denominador} é ${resultado}`);
}
 //Media4Notas//

 let n1 = Number(prompt("1º Nota:") || 0);
 let n2 = Number(prompt("2º Nota:") || 0);
 let n3 = Number(prompt("3º Nota:") || 0);
 let n4 = Number(prompt("4º Nota:") || 0);

 if(
     n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0
    || n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10
) {
    alert("Digite somente notas entre 0 e 10!");
} else {
    let media = (n1 + n2 + n3 + n4) /4;

    let resultado
    if(media < 5) {
        resultado = "Reprovado!";
    } else if (media > 6) {
        resultado = "Aprovado!!";
    } else {
        resultado = "Em recuperação"; 
    }
    const mensagem = `Você ficou com média ${media.toFixed(1)}. Resultado ${resultado}`; 
    alert(mensagem);
}