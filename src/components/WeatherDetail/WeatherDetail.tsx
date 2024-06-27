import {Weather} from '../../hooks/useWeather'
import {formatTemperature} from '../../utils/index'
import styles from './WeatherDetail.module.css'

type WeatherDetailProps={
    weather:Weather
}

export default function WeatherDetail({weather}:WeatherDetailProps){
    return(
        <div className={styles.container}>
            <h2>Clima de{weather.name}</h2>
            <p className={styles.current}>Temperatura actual: {formatTemperature( weather.main.temp)}&deg;C</p>
            <div className={styles.temperatures}>
                <p>Temperatura máxima: {formatTemperature(weather.main.temp_max)}&deg;C</p>
                <p>Temperatura mínima: {formatTemperature(weather.main.temp_min)}&deg;C</p>
            </div>
        </div>
    )
}