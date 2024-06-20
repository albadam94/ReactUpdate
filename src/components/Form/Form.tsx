import { ChangeEvent, useState } from "react"
import type { SearchType } from "../../types"
import { countries } from "../../data/countries"
import styles from './Form.module.css'
import Alert from "../Alert/Alert"

type FormProps ={
    fetchWeather:(search:SearchType)=>Promise<void>
}

export default function Form({fetchWeather}:FormProps) {
    const [search, setSearch] = useState<SearchType>({
        city:'',
        country:''
    })

    const[alert,setAlert]=useState(' ')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => 
        {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(search).includes(' ')){
            setAlert('Todos los campos son obligatorios')
            return
        }
        fetchWeather( )
    }

  return (

    <form 
    className={styles.form}
    onSubmit={handleSubmit}
    >
        {alert && <Alert>{alert}</Alert>}
        <div className={styles.field}>
            <label htmlFor="city">Ciudad:</label>
            <input type="text" id="city" name="city" placeholder="Ciudad" value={search.city}
            onChange={handleChange} />
            
        </div>
        <div className={styles.field}> 
            <label htmlFor="pais">Pais:</label>
            <select id='country' value={search.country}
            name='country'
            onChange={handleChange}
            >
            <option value="">Seleccione un pais</option>
            {countries.map(country=>(
                <option key={country.code} value={country.code}>{country.name}</option>
            
            ))}
            </select>
        </div>
        <input className={styles.submit} type="submit" value="Buscar clima" />
    </form>
)
}
