import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuid } from 'uuid';
import { IColaborador } from '../../Shared/interfaces/iColaborador'

interface FormularioProps{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
    cadastrarTime: (novoTime: {id?: any; nome: string; cor: string; }) => void
}

const Formulario = ({aoColaboradorCadastrado, cadastrarTime, times}: FormularioProps) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [id, setId] = useState('')
    const [favorito] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id,
            favorito,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setId(uuid())
        setData('')
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio
                    label="Nome*"
                    placeholder="Digite o seu nome" 
                    valor= {nome} 
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cargo*" 
                    placeholder="Digite o seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <Campo 
                    label="Data de entrada no time"
                    placeholder=''
                    valor={data}
                    type='date'
                    aoAlterado={valor => setData(valor)}    
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens= {times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label="Nome*" 
                    placeholder="Digite o nome do time" 
                    valor= {nomeTime} 
                    aoAlterado={valor => setNomeTime(valor)}
                    type='text'
                />
                <Campo
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                    type='color'
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario