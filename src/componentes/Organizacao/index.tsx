import './Organizacao.css'

interface OrganizacaoProps{
    exibirForm: () => void
}

const Organizacao = ({exibirForm}: OrganizacaoProps) =>{

    return(
        <section className='organizacao'>
            <h2 className='organizacao-titulo'>Minha Organizacao:</h2>
            <div onClick={exibirForm} className='organizacao-botao'>
                <img src='/imagens/botao.png' alt='botao' />
            </div>
        </section>
    )
}

export default Organizacao