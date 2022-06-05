
function clicou(){
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>';
    //console.log(document.getElementById('agradecimento'));
   // alert('Obrigado por clicar');
}

function redirecionar(){
    window.open("https://diolinux.com.br/");
    //window.location.href = "https://diolinux.com.br/";
}

function trocar(){
    document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse';
    //alert('trocar texto');
}

function voltar(){
    document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui';
}

function load(){
    alert('Página carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value);
};


/* function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10)); */

/* function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt('Qual sua idade');
console.log(validaIdade(idade)); */

/* function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace('Vai Japão', 'Japão', 'Brasil')); */


/* 
var d = new Date();
    console.log('Hoje é ' + d.getDate() + '/' + (d.getMonth()+1)); */
/* 
var d = new Date();
    alert(d.getMonth());
    alert(d.getHours());
    alert(d.getFullYear()); */

/* var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
 */

/* var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
};
 */
/* var idade = prompt('Qual sua idade?');
/* var idade = 18; 
if (idade >= 18){
    alert('maior de idade');
}else{
    alert('menor de idade');
}; */

/* var frutas = [{nome:'maça', cor:'vermelha'}, {nome:'uva', cor:'roxa'}]
console.log(frutas);
alert(frutas[1].nome); */

/* 
var fruta = {nome:'maça', cor:'vermelha'}
console.log(fruta.nome);
alert(fruta.cor); */

/* 
var lista = ['maça', 'pera', 'laranja'];
lista.push('uva');
//lista.pop();

console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(' '));
 */


/* 
var nome = 'Jailson Souza';
var idade = 5;
var idade2 = 13;
var frase = 'Japão é o melhor time do mundo';
/* alert(nome +' tem ' + idade + ' anos.'); */
/* alert(idade + idade2); */
/* console.log(idade + idade2);
console.log(frase.toLocaleUpperCase()); */

/* console.log(frase.replace('Japão', 'Brasil')); */
//alert(frase.replace('Japão', 'Brasil'));