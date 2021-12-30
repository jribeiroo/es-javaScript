console.log(`\n Trabalhando com loops`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(" \n Destinos Possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador<4){
    
    if(listaDeDestinos[contador]==destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log('Destino existe:', destinoExiste);

if(podeComprar && destinoExiste){
    console.log('boa viagem');
}else {
    console.log('erro na compra');
}

for(let cont =0; contador <4; cont ++ ){
    
    if(listaDeDestinos[contador]==destino){
        destinoExiste = true;
        break;
    }
}