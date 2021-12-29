console.log(`Trabalhando com Listas`); 

// const salvador = `Salvador`; 
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);


listaDeDestinos.push(`Belo Horizonte`) //adicionando dinamicamente

console.log("Destinos Possiveis"); 
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //retira elementos da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);// pega somente determinado elemento da lista unico