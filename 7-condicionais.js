console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//   console.log("comprador maior de idade");
//   listaDeDestinos.splice(1, 1); //retira elementos da lista
// } else if (estaAcompanhada) {
//   console.log("comprador esta acompanhado");
//   listaDeDestinos.splice(1, 1); //retira elementos da lista
// } else {
//   console.log("Não é maior de idade, proibida a venda");
// }

// console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log("boa viagem");
  listaDeDestinos.splice(2, 1); //retira elementos da lista
} else {
    console.log("não é maior de idade, proibida a venda");
}  

console.log("embraque: \n\n");

if(idadeComprador >=18 && temPassagemComprada){
    console.log("boa viagem ");
}else{
    console.log("voce não pode embarcar");
}

