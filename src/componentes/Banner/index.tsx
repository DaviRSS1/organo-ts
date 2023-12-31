import './Banner.css'

interface BannerProps{
    enderecoImagem: string
    textoAlt?: string
}

function Banner({ enderecoImagem, textoAlt }:BannerProps) {
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlt}/>
        </header>
    )
}

export default Banner