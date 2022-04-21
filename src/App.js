function App() {

  const frase = "Olá mundo, em uma string!";
  const vetor = [0, 1, 2, 3, 4, 5, "ola"];

  function clicou() {
    vetor.forEach((elemento) => {
      elemento += " :)";
      console.log(elemento);
    })
  }

  function dobra() {
    var novoVetor = vetor.map((elemento) => {
      return elemento*2;
    });

    console.log(novoVetor);
  }

  return (
    <div>
      <h1>Olá mundo!</h1>
      <h1>{frase}</h1>
      <Title></Title>
      {vetor[2]}
      <button onClick = { () => clicou() }>Oi</button>
      <button onClick = { () => dobra()}>Oi, novo vetor</button>
    </div>
  );
}


function Title() {
  return(
    <h1>Hello world!</h1>
  )
}

export default App;
