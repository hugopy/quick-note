import React from "react";
import Membro from "./Membro";
import Section from "./Section";
import {useState} from "react";

function App() {

  const [name, setName] = useState();
  const [cargo, setCargo] = useState();

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
        
        <input type="text" placeholder="Nome" onChange={(event) => setName(event.target.value)}></input>
        
        <br/>

        <input id="GS" type="radio" name="cargo" value="Gerente Scrum"
        onChange={(e) => setCargo(e.target.value)} />

        <label for="GS">Gerente Scrum</label>

        <br/>

        <input id="GP" type="radio" name="cargo" value="Gerente de Produtos"
        onChange={(e) => setCargo(e.target.value)} />

        <label for="GP">Gerente de Produtos</label>

        <br/>
        <br/>

        <p>Nome do membro: {name}</p>
        <p>Cargo do membro: {cargo}</p>
      </div>
    </div>
  );
}

export default App;
