function App() {

  const frase = "Olá mundo, em uma string!";

  function alertClick(mensagem) {
    alert(mensagem);
  }
  return (
    <div>
      <h1>Olá mundo!</h1>
      <h1>{frase}</h1>
      <Title></Title>
      <button onClick={() => alertClick("Primeiro botão")}>Botão 1</button>
      <button onClick={() => alertClick("Segundo botão")}> Botão 2</button>
    </div>
  );
}


function Title() {
  return(
    <h1>Hello world!</h1>
  )
}

export default App;
