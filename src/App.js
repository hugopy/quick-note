import React from "react";
import Membro from "./Membro";
import Section from "./Section";
import {useState} from "react";

function App() {

  const [membro, setMembro] = useState({});

  function handleInputChange(e) {
    const key = e.target.name;

    const newMembro = {...membro};
    newMembro[key] = e.target.value;

    setMembro(newMembro);
    console.log(newMembro);
  }
  const Hugo = {
    nome: "Hugo",
    idade: 19,
    cargo: "Trainee"
  };

  const Davi = {
    nome: "Davi",
    idade: 19,
    cargo: "Servidor publico"
  }

  return (
    <div>
      Olá mundo!
      <Section title="Membros">
        <Membro membro={Hugo}/>
        <Membro membro={Davi}/>
      </Section>

      <div>
        <h1>Criar novo membro</h1>
        
        <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange}></input>
        
        <br/>

        <input id="GS" name="cargo" type="radio" name="cargo" value="Gerente Scrum"
        onChange={handleInputChange} />

        <label for="GS">Gerente Scrum</label>

        <br/>

        <input id="GP" type="radio" name="cargo" value="Gerente de Produtos"
        onChange={handleInputChange} />

        <label for="GP">Gerente de Produtos</label>

        <br/>
        <br/>

        <p>Nome do membro: {membro.nome}</p>
        <p>Cargo do membro: {membro.cargo}</p>
      </div>
    </div>
  );
}

export default App;
