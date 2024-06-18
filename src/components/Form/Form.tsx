import { ChangeEvent, useState } from "react"
import type { SearchType } from "../../types"
import { countries } from "../../data/countries"
import styles from './Form.module.css'

export default function Form() {
    const [search, setSearch] = useState<SearchType>({
        city:'',
        country:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => 
        {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

  return (
    <form className={styles.form}>
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
