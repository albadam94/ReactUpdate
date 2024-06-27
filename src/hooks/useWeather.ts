import axios from 'axios'
import {useState,useMemo} from 'react'
import { SearchType } from '../types'
import {z} from 'zod'

/*
//Type Guards o Assertion
function isWeatherResponse(weather:unknown):weather is Weather{
    return(
        Boolean(weather)&&
        typeof weather==='object'&&
        typeof(weather as Weather).name==='string'&&
        typeof(weather as Weather).main.temp==='number'&&
        typeof(weather as Weather).main.temp_max==='number'&&
        typeof(weather as Weather).main.temp_min==='number'
    )
}
*/

//ZOD

const Weather = z.object({
    name:z.string(),
    main: z.object({
        temp:z.number(),
        temp_max:z.number(),
        temp_min:z.number(),

    })
})

export type Weather=z.infer<typeof Weather>

const initialState={
    name:'',
    main:{
        temp:0,
        temp_max:0,
        temp_min:0
    }

}

export default function useWeather( ){

    const[weather,setWeather]=useState<Weather>(initialState)
     

    const[loading,setLoading]=useState(false)
    
    const fetchWeather=async(search:SearchType)=>{
        const appid = import.meta.env.VITE_API_KEY
        setLoading(true)
        setWeather(initialState)
        
        try{
            const geoUrl= `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},
            ${search.country}&appid=${appid}`

            const {data}= await axios(geoUrl)
            
            if(!data[0]){
                alert('Clima no encontrado')
                return
            }

            const lat= data[0].lat
            const lon=data[0].lon 

            const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
            
            //Castear el type
            /*const{data:weatherResult}= await axios<Weather>(weatherUrl)
            console.log(weatherResult)*/
                /*
                            type Guards
                            const{data:weatherResult}= await axios(weatherUrl)
                            const result = isWeatherResponse(weatherResult)
                            if(result){
                                console.log(weatherResult)
                            }*/

                //ZOD
        const {data:weatherResult} = await axios(weatherUrl)
        const result = Weather.safeParse(weatherResult)
        if(result.success){
            setWeather(result.data)
            }
        }catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    } 

    const hasWeatherData=useMemo(()=>weather.name,[weather])
        return{
            weather,
            loading,
            fetchWeather,
            hasWeatherData

    }
}
