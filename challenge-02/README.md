# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum (n1,n2){
  return soma = n1 + n2
 
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let calc = sum(5,5) + 5

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
let some 

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function algo (){
  let some = 5;
  return 'o valor da variável agora é ' + some
}

// Invoque a função criada acima.
algo()

// Qual o retorno da função? (Use comentários de bloco).
/*
o valor da variável agora é 5
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function newSum (n1,n2,n3){
  if (n1 === undefined || n2 === undefined || n3 === undefined){
    return 'por favor preencha os argumentos'
  } else { 
  return (n1*n2*n3) + 2
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
newSum(5,5)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// por favor preencha os argumentos

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

newSum(5,5,5)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
125

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function bigproblem(a1,a2,a3){
  if (a1 !== undefined && a2 === undefined && a3 === undefined) { 
    return a1
  } else if(a1 !== undefined &&  a2 !== undefined && a3 === undefined) {
    return a1 + a2
  
  }else if (a1 !== undefined && a2 !== undefined && a3 !== undefined){
    return (a1+a2) / a3
  
}else if (a1 === undefined || a2 === undefined || a3 === undefined){
  return false
}else {
  return null
}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
bigProblem(1) //1
bigProblem(1,3)//4
bigProblem(1,3,2)//2

```
