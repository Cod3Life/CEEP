//xemplo: tirar da listaDeTarefas e por aqui:

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

export default BotaoConclui;
