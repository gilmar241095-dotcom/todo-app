import { useState } from "react";
import Botao from "./components/Botao";

function App(){

  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", feita: false }
  ]);

  const [texto, setTexto] = useState("");

  function adicionarTarefa(){
    if(texto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      feita: false
    };


    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function removerTarefa(id){
    const novaLista = tarefas.filter(t => t.id !== id);
    setTarefas(novaLista);
  }

  function marcarComoFeita(id){
    const novaLista = tarefas.map(tarefa => {
      if(tarefa.id === id){
        return { ...tarefa, feita: !tarefa.feita };
      }
      return tarefa;
    });

    setTarefas(novaLista);
  }

  return (
    <div className="container">

      <h1>To‑Do List</h1>

      <input
        type="text"
        value={texto}
        placeholder="Digite uma tarefa"
        onChange={(e)=> setTexto(e.target.value)}
      />

      <Botao onClick={adicionarTarefa}>
        Adicionar
      </Botao>

      <ul>
        {tarefas.map((tarefa)=>(
          <li key={tarefa.id}>

            <input
              type="checkbox"
              checked={tarefa.feita}
              onChange={()=> marcarComoFeita(tarefa.id)}
            />

            <span style={{
              marginLeft:"8px",
              textDecoration: tarefa.feita ? "line-through" : "none"
            }}>
              {tarefa.texto}
            </span>

            <Botao onClick={()=> removerTarefa(tarefa.id)}>
              Remover
            </Botao>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
