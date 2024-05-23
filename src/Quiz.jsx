import React, { useState } from 'react';
import './App.css';

const perguntas = [
  {
    pergunta: 'Quem foi o fundador do grupo de rap institulado Wu-Tang Clan?',
    opcoes: ['GZA', 'Ghostface Killah', 'RZA', 'Ol Dirty Bastard'],
    resposta: 'RZA'
  },
  {
    pergunta: 'Em que ano foi formado o grupo?',
    opcoes: ['1992', '1983', '1930', '1983'],
    resposta: '1992'
  },
  {
    pergunta: 'Quantos membros fundadores o Wu-Tang Clan possui? ',
    opcoes: ['5', '7', '9', '11'],
    resposta: '9'
  },
  {
    pergunta: 'Qual cidade é a origem do Wu-Tang Clan?',
    opcoes: ['Los Angeles, CA', 'Atlanta, GA', 'Chicago, IL', 'Staten Island, NY'],
    resposta: 'Staten Island, NY'
  },
  {
    pergunta: 'Qual foi o ano de lançamento do álbum de estreia do Wu-Tang Clan, "Enter the Wu-Tang (36 Chambers)"?',
    opcoes: ['1990', '1993', '1996', '1999'],
    resposta: '1993'
  }
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const responder = (respostaSelecionada) => {
    const novasRespostas = [...respostas, respostaSelecionada];
    setRespostas(novasRespostas);

    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado(novasRespostas);
    }
  };

  const calcularResultado = (novasRespostas) => {
    let pontuacao = 0;
    for (let i = 0; i < perguntas.length; i++) {
      if (novasRespostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }
    setResultado(pontuacao);
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };

  return (
    <div>
      {resultado !== null ? (
        <div>
          <h2>Resultado do Quiz</h2>
          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <ul>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li key={index} onClick={() => responder(opcao)}>
                {opcao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;