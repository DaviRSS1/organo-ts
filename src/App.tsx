import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import Organizacao from "./componentes/Organizacao";
import { IColaborador } from "./Shared/interfaces/iColaborador";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  function resolverFavorito(id: number) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  const[form, setForm] = useState(true)
  
  function exibirForm() {
    if (form === true){
      setForm(false)
    } else {setForm(true)}
}
  
  function cadastrarTime(novoTime: { id?: any; nome: string; cor: string; }){
    setTimes([...times, { ...novoTime, id: uuidv4()}])
  }

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id: number){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor: string, id: number){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div className="App"> 
      <Banner enderecoImagem="/imagens/banner.png" textoAlt="Banner principal da página do Organo"/>
      {form &&(
        <Formulario 
          times={times.map(time => time.nome)} 
          aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}
          cadastrarTime={cadastrarTime}
        />
      )}
      <Organizacao exibirForm={exibirForm}/>
      {times.map(time => 
        <Time 
          aoFavoritar={resolverFavorito}
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          idTime={time.id}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
