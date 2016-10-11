/**
 * 
 */
var canvas;
var contexto;
canvas = document.getElementById("truquinho");
console.log(canvas);
contexto = canvas.getContext("2d");


var placarGeral = [0,0,0];/*Inicia o placar do jogo com espaço para os três jogadores*/

//definir os jogadores e seus atributos
var jogador1= {id: 1, nomePersonagem: "Platô", cartasMao:[], placarRodada:0};
var jogador2= {id: 2, nomePersonagem: "Liber", cartasMao:[], placarRodada:0};
var jogador3= {id: 3, nomePersonagem: "Zel", cartasMao:[], placarRodada:0};

//Cria uma array chamada baralho com elementos chamados de cartas que são objetos complexos
var baralho=[
	carta0={nome:"3 de paus",forca:6, manilha:false,valorManilha:4},
	carta1={nome:"2 de paus",forca:5, manilha:false,valorManilha:4},
	carta2={nome:"A de paus",forca:4, manilha:false,valorManilha:4},
	carta3={nome:"K de paus",forca:3, manilha:false,valorManilha:4},
	carta4={nome:"J de paus",forca:2, manilha:false,valorManilha:4},
	carta5={nome:"Q de paus",forca:1, manilha:false,valorManilha:4},
	carta6={nome:"3 de copas",forca:6, manilha:false,valorManilha:3},
	carta7={nome:"2 de copas",forca:5, manilha:false,valorManilha:3},
	carta8={nome:"A de copas",forca:4, manilha:false,valorManilha:3},
	carta9={nome:"K de copas",forca:3, manilha:false,valorManilha:3},
	carta10={nome:"J de copas",forca:2, manilha:false,valorManilha:3},
	carta11={nome:"Q de copas",forca:1, manilha:false,valorManilha:3},
	carta12={nome:"3 de espadas",forca:6, manilha:false,valorManilha:2},
	carta13={nome:"2 de espadas",forca:5, manilha:false,valorManilha:2},
	carta14={nome:"A de espadas",forca:4, manilha:false,valorManilha:2},
	carta15={nome:"K de espadas",forca:3, manilha:false,valorManilha:2},
	carta16={nome:"J de espadas",forca:2, manilha:false,valorManilha:2},
	carta17={nome:"Q de espadas",forca:1, manilha:false,valorManilha:2},
	carta18={nome:"3 de ouros",forca:6, manilha:false,valorManilha:1},
	carta19={nome:"2 de ouros",forca:5, manilha:false,valorManilha:1},
	carta20={nome:"A de ouros",forca:4, manilha:false,valorManilha:1},
	carta21={nome:"K de ouros",forca:3, manilha:false,valorManilha:1},
	carta22={nome:"J de ouros",forca:2, manilha:false,valorManilha:1},
	carta23={nome:"Q de ouros",forca:1, manilha:false,valorManilha:1}	
];

//função para embaralhar e distribuir cartas
var embaralharEDistribuir = function(jogador1, jogador2, jogador3,baralho){
	
	var manilha = this.baralho[Math.floor(Math.random() * 23 + 1)];/*Definimos de forma rândomica a manilha*/
	console.log("A manilha virada é:  ");/*Teste no console*/
	console.log(manilha)
	
	if(manilha == baralho[0]||/*Aqui se define como true o atributo manilha de cada carta em específico*/
			manilha== baralho[6]||
			manilha== baralho[12]||
			manilha== baralho[18]){
		baralho[5].manilha=true;
		baralho[11].manilha=true;
		baralho[17].manilha=true;
		baralho[23].manilha=true;
		console.log("Funciona");
	}else if(manilha == this.baralho[1]||
			manilha== this.baralho[7]||
			manilha== this.baralho[13]||
			manilha== this.baralho[19]){
		this.baralho[0].manilha=true;
		this.baralho[6].manilha=true;
		this.baralho[12].manilha=true;
		this.baralho[18].manilha=true;	
		console.log("Funciona");
	}else if(manilha == this.baralho[2]||
			manilha== this.baralho[8]||
			manilha== this.baralho[14]||
			manilha== this.baralho[20]){
		this.baralho[1].manilha=true;
		this.baralho[7].manilha=true;
		this.baralho[13].manilha=true;
		this.baralho[19].manilha=true;
		console.log("Funciona");
	}else if(manilha == this.baralho[3]||
			manilha== this.baralho[9]||
			manilha== this.baralho[15]||
			manilha== this.baralho[21]){
		this.baralho[2].manilha=true;
		this.baralho[8].manilha=true;
		this.baralho[14].manilha=true;
		this.baralho[20].manilha=true;
		console.log("Funciona");
	}else if(manilha == this.baralho[4]||
			manilha== this.baralho[10]||
			manilha== this.baralho[16]||
			manilha== this.baralho[22]){
		this.baralho[3].manilha=true;
		this.baralho[9].manilha=true;
		this.baralho[15].manilha=true;
		this.baralho[21].manilha=true;
		console.log("Funciona");
	}else if(manilha == this.baralho[5]||
			manilha== this.baralho[11]||
			manilha== this.baralho[17]||
			manilha== this.baralho[23]){
		this.baralho[4].manilha=true;
		this.baralho[10].manilha=true;
		this.baralho[16].manilha=true;
		this.baralho[22].manilha=true;
		console.log("Funciona");
	}
	excluir_carta(this.baralho,manilha);
	
	this.jogador1.cartasMao.push(this.baralho[Math.floor(Math.random() * 22 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho, this.jogador1.cartasMao[0]);/*função que excluí a carta do baralho*/
	
	this.jogador1.cartasMao.push(this.baralho[Math.floor(Math.random() * 21 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho, this.jogador1.cartasMao[1]);/*função que excluí a carta do baralho*/
	
	this.jogador1.cartasMao.push(this.baralho[Math.floor(Math.random() * 20 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho, this.jogador1.cartasMao[2]);/*função que excluí a carta do baralho*/
	
	this.jogador2.cartasMao.push(this.baralho[Math.floor(Math.random() * 19 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho, this.jogador2.cartasMao[0]);/*função que excluí a carta do baralho*/
	
	this.jogador2.cartasMao.push(this.baralho[Math.floor(Math.random() * 18 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho, this.jogador2.cartasMao[1]);/*função que excluí a carta do baralho*/
	
	this.jogador2.cartasMao.push(this.baralho[Math.floor(Math.random() * 17 + 1)]);/*método que define carta aleatória a mão do jogador*/
	this.excluir_carta(this.baralho, this.jogador2.cartasMao[2]);/*função que excluí a carta do baralho*/
	
	this.jogador3.cartasMao.push(this.baralho[Math.floor(Math.random() * 16 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho, this.jogador3.cartasMao[0]);/*função que excluí a carta do baralho*/
	
	this.jogador3.cartasMao.push(this.baralho[Math.floor(Math.random() * 15 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho, this.jogador3.cartasMao[1]);/*função que excluí a carta do baralho*/
	
	this.jogador3.cartasMao.push(this.baralho[Math.floor(Math.random() * 14 + 1)]);/*método que define carta aleatória a mão do jogador*/
	excluir_carta(this.baralho,this.jogador3.cartasMao[2]);/*função que excluí a carta do baralho*/
	}

//função para excluir carta
var excluir_carta = function(baralhoParaExcluir, cartaParaExcluir){
	var index = baralhoParaExcluir.indexOf(cartaParaExcluir);/*define o número identificador da carta na array*/
	if(index>-1){/*Se houverem elementos no index da array(que começa em 0)*/
		baralhoParaExcluir.splice(index,1)/*Executa-se a função que excluí a carta, os parâmetros são o número de indície e a quantidade de elementos a serem excluídos nesse indície*/
	}
}

var rodada1= function(jogador1, jogador2, jogador3,placarGerale){
	var carta1J1 = this.jogador1.cartasMao[0];/*Adiciona o primeiro elemento da Array a carta 1 do jogador 1*/
	var carta1J2 = this.jogador2.cartasMao[0];/*Adiciona o primeiro elemento da Array a carta 1 do jogador 2*/
	var carta1J3 = this.jogador3.cartasMao[0];/*Adiciona o primeiro elemento da Array a carta 1 do jogador 3*/
	
	
	if(carta1J1.manilha == true && carta1J2.manilha== true && carta1J3.manilha== true){
		if(carta1J1.valorManilha > carta1J2.valorManilha && carta1J1.valorManilha > carta1J3.valorManilha){
			jogador1.placarRodada+= 3;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;			
		}else if(carta1J2.valorManilha > carta1J1.valorManilha && carta1J2.valorManilha > carta1J3.valorManilha){
			jogador2.placarRodada+= 3;
			jogador1.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta1J3.valorManilha > carta1J2.valorManilha && carta1J3.valorManilha > carta1J1.valorManilha){
			jogador3.placarRodada+= 3;
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
		}else{
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}
	}else if(carta1J1.manilha==true && carta1J2.manilha== false && carta1J3.manilha== false){
		jogador1.placarRodada+= 3;
		jogador2.placarRodada+=0;
		jogador3.placarRodada+=0;
	}else if(carta1J2.manilha==true && carta1J1.manilha== false && carta1J3.manilha== false){
		jogador2.placarRodada+= 3;
		jogador1.placarRodada+=0;
		jogador3.placarRodada+=0;
	}else if(carta1J3.manilha==true && carta1J2.manilha== false && carta1J1.manilha== false){
		jogador3.placarRodada+= 3;
		jogador1.placarRodada+=0;
		jogador2.placarRodada+=0;
	}else{
		if(carta1J1.forca > carta1J2.forca && carta1J1.forca > carta1J3.forca){
			jogador1.placarRodada+= 3;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta1J2.forca > carta1J1.forca && carta1J2.forca > carta1J3.forca){
			jogador2.placarRodada+= 3;
			jogador1.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta1J3.forca > carta1J1.forca && carta1J3.forca > carta1J2.forca){
			jogador3.placarRodada+= 3;
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
		}else{
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}
	}
	if(jogador1.placarRodada > 12){
		jogador1.placarRodada=0;
		console.log("Explodiu");
	}else if(jogador2.placarRodada>12){
		jogador2.placarRodada=0;
		console.log("explodiu");		
	} else if(jogador3.placarRodada > 12){
		jogador3.placarRodada=0;
		console.log("Explodiu");
	}else if (jogador1.placarRodada==12){
		console.log("Jogador 1 Venceu");
		close();
	}else if (jogador2.placarRodada==12){
		console.log("Jogador 2 Venceu");
		close();
	}else if (jogador3.placarRodada==12){
		console.log("Jogador 3 Venceu");
		close();
	}
	placarGerale[0] +=jogador1.placarRodada;
	placarGerale[1] +=jogador2.placarRodada;
	placarGerale[2] +=jogador3.placarRodada;	
}

var rodada2= function(jogador1, jogador2, jogador3,placarGerale){
		
	var carta2J1 = this.jogador1.cartasMao[1];/*Adiciona o segundo elemento da Array a carta 2 do jogador 1*/
	
	var carta2J2 = this.jogador2.cartasMao[1];/*Adiciona o segundo elemento da Array a carta 2 do jogador 2*/
	
	var carta2J3 = this.jogador3.cartasMao[1];/*Adiciona o segundo elemento da Array a carta 2 do jogador 3*/
	
	if(carta2J1.manilha == true && carta2J2.manilha== true && carta2J3.manilha== true){
		if(carta2J1.valorManilha > carta2J2.valorManilha && carta2J1.valorManilha > carta2J3.valorManilha){
			jogador1.placarRodada+=2;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta2J2.valorManilha > carta2J1.valorManilha && carta2J2.valorManilha > carta2J3.valorManilha){
			jogador2.placarRodada+=2;
			jogador1.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta2J3.valorManilha > carta2J2.valorManilha && carta2J3.valorManilha > carta2J1.valorManilha){
			jogador3.placarRodada+=2;
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
		}else{
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}
	}else if(carta2J1.manilha==true && carta2J2.manilha== false && carta2J3.manilha== false){
		jogador1.placarRodada+=2;
		jogador2.placarRodada+=0;
		jogador3.placarRodada+=0;
	}else if(carta2J2.manilha==true && carta2J1.manilha== false && carta2J3.manilha== false){
		jogador2.placarRodada+=2;
		jogador1.placarRodada+=0;
		jogador3.placarRodada+=0;
	}else if(carta2J3.manilha==true && carta2J2.manilha== false && carta2J1.manilha== false){
		jogador3.placarRodada+=2;
		jogador1.placarRodada+=0;
		jogador2.placarRodada+=0;
	}else{
		if(carta2J1.forca > carta2J2.forca && carta2J1.forca > carta2J3.forca){
			jogador1.placarRodada+=2;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta2J2.forca > carta2J1.forca && carta2J2.forca > carta2J3.forca){
			jogador2.placarRodada+=2;
			jogador1.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta2J3.forca > carta2J1.forca && carta2J3.forca > carta2J2.forca){
			jogador3.placarRodada+=2;
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
		}else{
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}
	}
	if(jogador1.placarRodada > 12){
		jogador1.placarRodada=0;
		console.log("Explodiu");
	}else if(jogador2.placarRodada>12){
		jogador2.placarRodada=0;
		console.log("explodiu");		
	} else if(jogador3.placarRodada > 12){
		jogador3.placarRodada=0;
		console.log("Explodiu");
	}else if (jogador1.placarRodada==12){
		console.log("Jogador 1 Venceu");
		close();
	}else if (jogador2.placarRodada==12){
		console.log("Jogador 2 Venceu");
		close();
	}else if (jogador3.placarRodada==12){
		console.log("Jogador 3 Venceu");
		close();
	}
	
	placarGerale[0] +=jogador1.placarRodada;
	placarGerale[1] +=jogador2.placarRodada;
	placarGerale[2] +=jogador3.placarRodada;
	
}

var rodada3= function(jogador1, jogador2, jogador3,placarGerale){
	
	var carta3J1 = this.jogador1.cartasMao[2];/*Adiciona o terceiro elemento da Array a carta 3 do jogador 1*/
	
	var carta3J2 = this.jogador2.cartasMao[2];/*Adiciona o terceiro elemento da Array a carta 3 do jogador 2*/
		
	var carta3J3 = this.jogador3.cartasMao[2];/*Adiciona o terceiro elemento da Array a carta 3 do jogador 3*/
	
	if(carta3J1.manilha == true && carta3J2.manilha== true && carta3J3.manilha== true){
		if(carta3J1.valorManilha > carta3J2.valorManilha && carta3J1.valorManilha > carta3J3.valorManilha){
			jogador1.placarRodada+=1;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta3J2.valorManilha > carta3J1.valorManilha && carta3J2.valorManilha > carta3J3.valorManilha){
			jogador2.placarRodada+=1;
			jogador1.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta3J3.valorManilha > carta3J2.valorManilha && carta3J3.valorManilha > carta3J1.valorManilha){
			jogador3.placarRodada+=1;
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
		}else{
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}
	}else if(carta3J1.manilha==true && carta3J2.manilha== false && carta3J3.manilha== false){
		jogador1.placarRodada+=1;
		jogador2.placarRodada+=0;
		jogador3.placarRodada+=0;
	}else if(carta3J2.manilha==true && carta3J1.manilha== false && carta3J3.manilha== false){
		jogador2.placarRodada+=1;
		jogador1.placarRodada+=0;
		jogador3.placarRodada+=0;
	}else if(carta3J3.manilha==true && carta3J2.manilha== false && carta3J1.manilha== false){
		jogador3.placarRodada+=1;
		jogador1.placarRodada+=0;
		jogador2.placarRodada+=0;
	}else{
		if(carta3J1.forca > carta3J2.forca && carta3J1.forca > carta3J3.forca){
			jogador1.placarRodada+=1;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta3J2.forca > carta3J1.forca && carta3J2.forca > carta3J3.forca){
			jogador2.placarRodada+=1;
			jogador1.placarRodada+=0;
			jogador3.placarRodada+=0;
		}else if(carta3J3.forca > carta3J1.forca && carta3J3.forca > carta3J2.forca){
			jogador3.placarRodada+=1;
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
		}else{
			jogador1.placarRodada+=0;
			jogador2.placarRodada+=0;
			jogador3.placarRodada+=0;
		}
	}
	if(jogador1.placarRodada > 12){
		jogador1.placarRodada=0;
		console.log("Explodiu");
	}else if(jogador2.placarRodada>12){
		jogador2.placarRodada=0;
		console.log("explodiu");		
	} else if(jogador3.placarRodada > 12){
		jogador3.placarRodada=0;
		console.log("Explodiu");
	}else if (jogador1.placarRodada==12){
		console.log("Jogador 1 Venceu");
		close();
	}else if (jogador2.placarRodada==12){
		console.log("Jogador 2 Venceu");
		close();
	}else if (jogador3.placarRodada==12){
		console.log("Jogador 3 Venceu");
		close();
	}
	placarGerale[0] +=jogador1.placarRodada;
	placarGerale[1] +=jogador2.placarRodada;
	placarGerale[2] +=jogador3.placarRodada;
	
}

var verificar = function(jogador1, jogador2, jogador3){
	
	if(jogador1.placarRodada > 12){
		jogador1.placarRodada=0;
		console.log("Explodiu");
	}else if(jogador2.placarRodada>12){
		jogador2.placarRodada=0;
		console.log("explodiu");		
	} else if(jogador3.placarRodada > 12){
		jogador3.placarRodada=0;
		console.log("Explodiu");
	}else if (jogador1.placarRodada==12){
		console.log("Jogador 1 Venceu");
		close();
	}else if (jogador2.placarRodada==12){
		console.log("Jogador 2 Venceu");
		close();
	}else if (jogador3.placarRodada==12){
		console.log("Jogador 3 Venceu");
		close();
	}
}


//teste de atributos dos jogadores
embaralharEDistribuir(jogador1, jogador2, jogador3,baralho);

console.log("id: "+jogador1.id);
console.log("Personagem: "+jogador1.nomePersonagem);
console.log("Cartas na Mão: "+jogador1.cartasMao[0].nome+" "+jogador1.cartasMao[1].nome+" "+jogador1.cartasMao[2].nome);
console.log("Placar Provisório: "+jogador1.placarRodada);
placarGeral[0]+=jogador1.placarRodada;
console.log("placar da Partida: "+placarGeral[0]);

console.log("id: "+jogador2.id);
console.log("Personagem: "+jogador2.nomePersonagem);
console.log("Cartas na Mão: "+jogador2.cartasMao[0].nome+" "+jogador2.cartasMao[1].nome+" "+jogador2.cartasMao[2].nome);
console.log("Placar Provisório: "+jogador2.placarRodada);
placarGeral[1]+=jogador2.placarRodada;
console.log("placar da Partida: "+placarGeral[0]);

console.log("id: "+jogador3.id);
console.log("Personagem: "+jogador3.nomePersonagem);
console.log("Cartas na Mão: "+jogador3.cartasMao[0].nome+" "+jogador3.cartasMao[1].nome+" "+jogador3.cartasMao[2].nome);
console.log("Placar Provisório: "+jogador3.placarRodada);
placarGeral[2]+=jogador3.placarRodada;
console.log("placar da Partida: "+placarGeral[0]);
