import './Campo.css'

interface CampoProps{
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    type?: 'text' | 'password' | 'date' | 'email' | 'color'
    obrigatorio?: boolean
}

const Campo = ({ aoAlterado, placeholder, obrigatorio = false, valor, type = 'text', label }:CampoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                value={valor} 
                onChange={aoDigitado}
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo