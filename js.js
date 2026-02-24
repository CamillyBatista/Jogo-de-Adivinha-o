/*
1= fazer pc escolher um numero (random)
1.2 = pegar numero do usúario (get(id))
1.3 = comparar valores (===)
    1,4 = se for igual, usuario vence (if)
    1,5 = se não, perde e tenta de novo até 20 tentativas (else, for )
        1,6= soma a quantidade de tentativas a cada erro.
        1,7= dica se é maior ou menor
    1,6 = se chegar a 20 e ainda não acertar, realmente perde. (else)
*/
function gerarNumerosecreto(){
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    return random (1,11)
};

let numerosecreto = gerarNumerosecreto();
const obterelemento = (id) => document.getElementById(id);
let tentativas = 0;
let Maxtentativas = 5;

function obterchutedousuario(){
    const input = obterelemento('chute');
    return Number(input.value);
    
}
function jogar(){
    if (tentativas >= Maxtentativas){
        document.getElementById("resultado").textContent = "Suas tentativas Acabaram";
        return;
    }


const chute = obterchutedousuario();
tentativas++;

if (chute === numerosecreto){
    document.getElementById("resultado").textContent="Parabéns você acertou";
}
 else if(chute < numerosecreto){
    document.getElementById("resultado").textContent="Errado, é maior!";
 } else {
    document.getElementById("resultado").textContent="Muito Alto!";
 }

 if (tentativas === Maxtentativas && chute != numerosecreto){
    document.getElementById("resultado").textContent="Suas chances acabaram, o numero era " + numerosecreto;
 }
 document.getElementById("dica").textContent =
    `Tentativas: ${tentativas} de ${Maxtentativas}`;
}