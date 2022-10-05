function atualizar(){
    
    let h1 = document.getElementById('texto');
    let inp = document.getElementById('entrada');
    let valor = inp.value
    h1.innerText = valor
    
}


localStorage.setItem('text', valor)

onload = function(){
    let txt = localStorage.getItem('text')
    let h1 = document.getElementById('texto')
    h1.innerText = txt
}











/*Inicio
THIS
Quando em modo estrito (strict mode), this mantém o valor undefined em funções globais e em funções anônimas que não estão vinculadas a nenhum objeto. this é usado dentro de uma função (digamos função “A”) e ele contém o valor do objeto que invoca a função A.
------------------------------------------------------------------
pai e filho
para pegar o filho: children[0]
para pegar o pai: parentElement
                        
APRENDIZADO SOBRE A TAG input
para usar o valor digitado basta usar a palavra chave "value"

Fim*/