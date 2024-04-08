import {useState,ChangeEvent, FormEvent} from "react";
import { Activity } from "../types";
import { categories } from "../data/categories";

export default function Form() {
  
  const [activity,setActivity] = useState<Activity>({
    category:1,
    name:" ",
    calories: 0
  });

  const handleChange= (e:ChangeEvent<HTMLSelectElement>|ChangeEvent<HTMLInputElement>) =>{
    setActivity({...activity,[e.target.id]: e.target.value});
  }

  const isValidActivity = ( ) => {
    const {name,calories} = activity;
    return name.trim( ) !== " " && calories > 0;
  }

  const handleSubmit = ( e: FormEvent <HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <form
    className="space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit={handleSubmit }
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category" value={activity.category} onChange={handleChange}
            >
                {categories.map((category) => ( category.id === 1 ? 
                <option key={category.id} value={category.id} selected>{category.name}</option> : <option key={category.id} value={category.id}>{category.name}</option> ) )}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name"className="font-bold">Actividad:</label>
        <input type="text" id="name"className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
        placeholder="Ej: Correr 30 minutos, comida, Ejercicio, pesas"
        value={activity.name} onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input type="number" id="calories" className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
        placeholder="Calorias"
        value={activity.calories} 
        onChange={handleChange}
        />
        </div>
        <input
        type="submit"
        className="bg-gray-800 text-white font-bold py-2 rounded-lg w-full cursor-pointer disabled:opacity-5"
        value="Agregar Actividad"
        disabled={!isValidActivity()}
        />
    </form>
  )
}
