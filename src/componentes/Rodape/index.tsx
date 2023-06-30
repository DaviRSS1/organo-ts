import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <div>
                <a href='/#' className='links'>
                    <img src='/imagens/fb.png' alt='Logo Facebook'/> 
                </a>
                <a href='/#' className='links'>
                    <img src='/imagens/tw.png' alt='Logo Twitter'/>
                </a>
                <a href='/#' className='links'>
                    <img src='/imagens/ig.png' alt='Logo Instagram'/>
                </a>
            </div>
            <img src='/imagens/logo.png' alt='Logo Organo'/>
            <p>Desenvolvido por Davi</p>
        </footer>
    )
}

export default Rodape