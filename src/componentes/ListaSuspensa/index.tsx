import './ListaSuspensa.css'

interface ListaSuspensaProps{
    aoAlterado: (valor:string) => void
    itens: string[]
    label: string
    valor: string
    obrigatorio?: boolean
}

const ListaSuspensa = ({aoAlterado, obrigatorio, itens, label, valor}: ListaSuspensaProps) =>{
    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange = {evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map((item) => {
                    return<option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa