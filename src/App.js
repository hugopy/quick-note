import React from "react";
import Membro from "./Membro";
import Section from "./Section";
import {useState} from "react";

function App() {

  const [membro, setMembro] = useState({});
  const [color, setColor] = useState();
  const [carrinho, setCarrinho] = useState([]);

  function handleInputChange(e) {
    const key = e.target.name;

    const newMembro = {...membro};
    newMembro[key] = e.target.value;

    setMembro(newMembro);
    console.log(newMembro);
  }

  function handleArrayChange(e) {
    const value = e.target.value;
    const newCarrinho = [...carrinho];
    const index = carrinho.indexOf(value);

    if(index === -1) {
      newCarrinho.push(value);
      setCarrinho(newCarrinho);
    } else {
      newCarrinho.splice(index, 1);
      setCarrinho(newCarrinho);
    }
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

        <input id="GS" name="cargo" type="radio" value="Gerente Scrum"
        onChange={handleInputChange} />

        <label for="GS">Gerente Scrum</label>

        <br/>

        <input id="GP" type="radio" name="cargo" value="Gerente de Produtos"
        onChange={handleInputChange} />

        <label for="GP">Gerente de Produtos</label>

        <br/>

        <input id="GP" type="radio" name="color" value="red"
        onChange={ (e)=> {setColor(e.target.value)} } />

        <label for="GP">red</label>

        <br/>

        <input id="GP" type="radio" name="color" value="blue"
        onChange={ (e)=> {setColor(e.target.value)} } />

        <label for="GP">blue</label>

        <br/>
        <input id="Tesoura" type="checkbox" value="Tesoura" onChange={handleArrayChange}></input>
        <label htmlFor="Tesoura">Tesoura</label>
        <br/>
        <input id="Cola" type="checkbox" value="Cola" onChange={handleArrayChange}></input>
        <label htmlFor="Cola">Cola</label>
        <br/>
        <input id = "Lápis" type="checkbox" value="Lápis" onChange={handleArrayChange}></input>
        <label htmlFor="Lápis">Lápis</label>

        <br/>
        <br/>

        <p>Nome do membro: {membro.nome}</p>
        <p>Cargo do membro: {membro.cargo}</p>
      </div>
      <div style={ {background: color} }>
        <p>oi</p>
      </div>

      <div>
        {carrinho.join(" ")}
      </div>
    </div>
  );
}

export default App;
