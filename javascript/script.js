const jogador1 = {
	habilidade: Math.floor(Math.random() * 6) + 7,
	energia: Math.floor(Math.random() * 11) + 25
}

const jogador2 = {
	habilidade: Math.floor(Math.random() * 6) + 7,
	energia: Math.floor(Math.random() * 11) + 25
}

const habilidade1 = document.getElementById('habilidade1');
const energia1 = document.getElementById('energia1');
const habilidade2 = document.getElementById('habilidade2');
const energia2 = document.getElementById('energia2');
const attackBtn = document.getElementById('attack-btn');
const result = document.getElementById('result');

habilidade1.textContent = jogador1.habilidade;
energia1.textContent = jogador1.energia;
habilidade2.textContent = jogador2.habilidade;
energia2.textContent = jogador2.energia;

attackBtn.addEventListener('click', () => {
	const gira1 = Math.floor(Math.random() * 6) + jogador1.habilidade;
	const gira2 = Math.floor(Math.random() * 6) + jogador2.habilidade;
	
	if (gira1 > gira2) {
		jogador2.energia -= 2;
		result.textContent = 'Jogador 1 venceu a rodada!';
	} else if (gira2 > gira1) {
		jogador1.energia -= 2;
		result.textContent = 'Jogador 2 venceu a rodada!';
	} else {
		jogador1.energia -= 1;
		jogador2.energia -= 1;
		result.textContent = 'EMPATE!';
	}
	
	energia1.textContent = jogador1.energia;
	energia2.textContent = jogador2.energia;
	
	if (jogador1.energia <= 0 || jogador2.energia <= 0) {
		attackBtn.disabled = true;
		if (jogador1.energia > jogador2.energia) {
			result.textContent = 'Jogador 1 venceu o Jogo!';
		} else if (jogador2.energia > jogador1.energia) {
			result.textContent = 'Jogador 2 venceu o Jogo!';
		} else {
			result.textContent = 'It\'s a tie game!';
		}
	}
});

  // Array de nomes aleatórios
  const nomes = ['Ivo', 'Kajin', 'Igor', 'Mauro', 'Felipe', 'Gabriel'];

  // Função para gerar um nome aleatório
  function gerarNomeAleatorio() {
    const indice = Math.floor(Math.random() * nomes.length);
    return nomes[indice];
  }

  // Atualiza o nome do jogador 1
  document.querySelector('#jogador1 h2').textContent = gerarNomeAleatorio();
