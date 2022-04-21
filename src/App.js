import React from "react";
import Membro from "./Membro";
import Section from "./Section";

function App() {

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
    </div>
  );
}

export default App;
