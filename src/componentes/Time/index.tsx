import { IColaborador } from '../../Shared/interfaces/iColaborador';
import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba';

interface TimeProps{
    idTime: any;
    corPrimaria?: string
    corSecundaria?: string
    nome: string
    colaboradores: IColaborador[]
    aoDeletar: (id:number) => void
    aoFavoritar: (id: any) => void
    cor: string
    mudarCor: (evento: any, idTime: number) => void
}

const Time = ({ idTime, corPrimaria, corSecundaria, cor, mudarCor, aoDeletar, aoFavoritar, colaboradores, nome}: TimeProps) => {
    const css = { backgroundColor: hexToRgba(cor, '0.6') }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input onChange={
                (evento: React.ChangeEvent<HTMLInputElement>) => 
                    mudarCor(evento.target.value, idTime)} 
                    value={cor} 
                    type='color' 
                    className='input-cor' 
            />
            <h3 style={{borderColor: cor}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => {
                    return (
                        <Colaborador
                            key = {colaborador.nome} 
                            id = {colaborador.id} 
                            nome = {colaborador.nome} 
                            cargo = {colaborador.cargo} 
                            imagem = {colaborador.imagem} 
                            cor = {cor}
                            data={colaborador.data}
                            favorito={colaborador.favorito}
                            aoDeletar = {aoDeletar}
                            aoFavoritar = {aoFavoritar}  
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time