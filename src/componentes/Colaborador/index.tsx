import './Colaborador.css'
import { GrClose } from 'react-icons/gr'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

interface ColaboradorProps{
    aoFavoritar: (id: number) => void
    aoDeletar: (id: number) => void
    id: number
    cor: string
    imagem: string
    cargo: string
    nome: string
    data: string
    favorito: boolean
}

const Colaborador = ({aoFavoritar, aoDeletar, data, id, cor, imagem, cargo, nome, favorito}: ColaboradorProps) =>{

    function favoritar() {
        aoFavoritar(id)
    }   

    const propsFavorito ={
        size: 25,
        onClick: favoritar
    }

    return(
        <div className='colaborador'>
            <GrClose 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                <div className='favoritar'>
                    {favorito
                        ? <AiFillHeart {...propsFavorito} color='red'/> 
                        : <AiOutlineHeart {...propsFavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador