/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = [1,'algo',false,function(){},5]


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (ar){
    return  ar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
let myFunction2 = (arrayy,n1)=>{
    return arrayy[n1];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let variavel = [ 2,'sad',{},()=>{},55]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(variavel,0))
console.log(myFunction2(variavel,1))
console.log(myFunction2(variavel,2))
console.log(myFunction2(variavel,3))
console.log(myFunction2(variavel,4))
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nomeLivros){
    let allBooks = {
        'historia de joao' : {
            quantidadePaginas: 500,
            autor : 'joão',
            editora : 'casa do João'

        },

        'a vida de maria': {
            quantidadePaginas: 150,
            autor : 'Maria',
            editora : 'casa do Maria'

        },
        'vida urbana': {
            quantidadePaginas: 250,
            autor : 'Meretriz',
            editora : 'veja'

        }
      

    }
        return !nomeLivros ? allBooks : allBooks[nomeLivros];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( ` o livro  história de joãp  tem  ${book('historia de joao').quantidadePaginas} paginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( `O livro a vida de maria foi publicado pela editora ${book('a vida de maria').editora}`);
