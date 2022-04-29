
/*  criando a função para calcular a area, pode ser chamada quantas vezes necessario */

function calcularArea(){
  /* trazendo o valor digitado no html */
var input= document.getElementById("raio")

  
/* lendo o valor trazido do html*/
  var raio = input.value

  /* */
var area = 3.14 *raio**2
var p =document.getElementById("resultado")
/* modifica tudo que esta em htm que contem area no HTML */
  p.innerHTML= area

}




