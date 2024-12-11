let qtdCartas;
let cartasSelecionadas = [];
let contador = 0;
let cartaVirada = [];
let primeiraCarta;
let segundaCarta;


const nomeCartas = [
"bobrossparrot.gif",
"explodyparrot.gif",
"fiestaparrot.gif",
"metalparrot.gif",
"tripletsparrot.gif",
"revertitparrot.gif",
"unicornparrot.gif",
];




function perguntar(){
 qtdCartas = prompt("Com quantas cartas você quer jogar ?");
 let valor = qtdCartas % 2;
 if (qtdCartas < 4 || qtdCartas >14 || valor == 1 ){
 alert ("Quantidade de cartas não permitida, escolha valores ímpares entre 4 e 14");
 perguntar();
 }
}
perguntar();

function abrirJogo(){
	embaralharCartas();
     let lista = document.querySelector("ul");
     for (i = 0; i < qtdCartas; i++){
         lista.innerHTML =lista.innerHTML += `<li class="carta" onclick="virarCarta(this)">
            <div class="costa face" >
			     <img id="img" src="./assets/imagens/${cartasSelecionadas[i]}"/>
            </div>            
            <div class="frente face"  >
			     <img = src="./assets/back.png" alt="">
            </div>			
        </li>`;
}
}
abrirJogo();

function embaralharCartas() {
	cartasSelecionadas = nomeCartas.sort(comparador).slice(0, qtdCartas / 2);
	cartasSelecionadas = cartasSelecionadas.concat(cartasSelecionadas);
	cartasSelecionadas = cartasSelecionadas.sort(comparador);
  } 


function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(elemento){	
	cartaVirada = document.getElementsByClassName("verso");
	if(cartaVirada.length < 2 && !elemento.classList.contains("verso-correto")){
		elemento.classList.add("verso");
		contador++;
	}
	if(cartaVirada.length === 2){
		compararCarta(cartaVirada);
	}
	setTimeout(finalizar,2000);
}

function compararCarta(cartas){
     primeiraCarta = cartas[0].querySelector(".costa img").src;
     segundaCarta = cartas[1].querySelector('.costa img').src;
   if (primeiraCarta === segundaCarta){
	cartas[0].classList.add("verso-correto");
	cartas[1].classList.add("verso-correto");
	cartas[1].classList.remove("verso");
	cartas[0].classList.remove("verso");	
   }

   else if(primeiraCarta !== segundaCarta){
	setTimeout(function() {
		cartas[1].classList.remove("verso");
	    cartas[0].classList.remove("verso");
   },1000)
   }
}


function finalizar(){
	if(document.querySelectorAll(".verso-correto").length == qtdCartas){
		alert(`Parabens! Você venceu com ${contador} jogadas.`)
	   }
}