function App() {

  const pessoa = {
    nome: "Hugo",
    idade: 19
  };

  let chaves = Object.keys(pessoa);
  console.log(chaves);

  function imprime() {
    chaves.forEach((elemento) => {
      console.log(pessoa[elemento]);
    });

    console.log(pessoa);
    pessoa.pets = ["Lulu", "Kate", "Marry"];
    console.log(pessoa);
  }

  return (
    <div>
      <h1>Olá {pessoa.nome}</h1>
      <Title></Title>
      {chaves}
      <button onClick={() => {imprime()}}>Clique aqui!</button>
    </div>
  );
}


function Title() {
  return(
    <h1>Hello world!</h1>
  )
}

export default App;
