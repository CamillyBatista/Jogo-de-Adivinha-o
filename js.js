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
    console.log(random(0,11));
};
let numerosecreto = gerarNumerosecreto();
const obterelemento = (id) => document.getElementById(id);

function obterchutedousuario(){
    const input = obterelemento('chute');
    return Number(input.value);
    
}
function jogar(){
    const chute = obterchutedousuario();
    console.log(chute);


}