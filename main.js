//listaDeTarefas (noem original)

//JavaScript IIFE
//para não poder acessar nosso codigo: inserimos tudu dentro de (() => {AQUIDENTRO})()
//se usar módulos (import) não usa isso

import BotaoConclui from './componentes/concluirTarefa.js';
import BotaoDeleta from './componentes/deletarTarefa.js';

//(() => {
  const criarTarefa = (evento) => {
      //Prevenindo o comportamento padrão do formulário
      evento.preventDefault();

      //buscando o elemnto da <ul>
      const lista = document.querySelector('[data-list]')

      //Pegando a informação do input
      const input = document.querySelector('[data-form-input]');
      const valor = input.value;

      //Criando um elemento li (list item)
      const tarefa = document.createElement('li');
      //Adicionando uma classe de css no li, primeiro accesando a lista
      //de classes que esse li disponibiliza
      tarefa.classList.add('task');

      //Os `` (template string) vai interpolar HTML com o Javascript
      const conteudo = `<p class="content">${valor}</p>`;

      tarefa.innerHTML = conteudo;

      //Coloca o botão dentro da tarefa, qué o li
      //Adicionando BotaoConclui dentro do elemento li
      tarefa.appendChild(BotaoConclui());
      tarefa.appendChild(BotaoDeleta());

      //Adicionando elemento filho dentro de um elemento pai (pai sendo ul nessa caso)
      lista.appendChild(tarefa);

      //Limpar o input
      input.value = " ";
  };

  const novaTarefa = document.querySelector("[data-form-button]");
  novaTarefa.addEventListener('click', criarTarefa);

  /* Dentro da pasta componentes. MÓDULOS
  const BotaoConclui = () => {
    const botaoConlui = document.createElement('button');
    //colocando classe dentro de um elemento
    //adicionando um classe no botão
    botaoConlui.classList.add('check-button');
    //texto adicionado quando gera botão
    botaoConlui.innerText = 'concluir';
    botaoConlui.addEventListener('click', concluirTarefa);
    return botaoConlui;
  }

  const concluirTarefa = (evento) => {
    //Qual o alvo do evento? - target me fala em quem eu cliquei
    const botaoConlui = evento.target;

    //colacando o estilo de rabisco no li
    //estou pegando o pai do elemento que eu cliquei (nesse caso: o pai do botão)
    //acima de 'button' é o 'li'
    const tarefaCompleta = botaoConlui.parentElement;

    //dentro do toggle eu passo a classe do css, que nesse casa vai dar o efeito
    //de rabisco ou den tarefa conlcuida chamado "done"
    //vai executar essa classe css apartir do momento que eu clicar no botão
    //toggle me devolve um boolean verdadeiro ou falso
    //nesse caso: se tiver clicado ou não
    tarefaCompleta.classList.toggle('done');
  };

  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
  };

  const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement;
    //deleta o li inteiro
    tarefaCompleta.remove();
    return botaoDeleta;
  };
  */

//})()
