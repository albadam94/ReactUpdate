import { categories } from "../data/categories";

export default function Form() {
  return (
    <form
    className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category">
                {categories.map((category) => ( category.id === 1 ? 
                <option key={category.id} value={category.id} selected>{category.name}</option> : <option key={category.id} value={category.id}>{category.name}</option> ) )}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>
        <input type="text" id="activity" className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
        placeholder="Ej: Correr 30 minutos, comida, Ejercicio, pesas"
        />
        </div>
        <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input type="number" id="calories" className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
        placeholder="Calorias"
        />
        </div>
        <input
        type="submit"
        className="bg-gray-800 text-white font-bold py-2 rounded-lg w-full cursor-pointer"
        value="Enviar"
        />
    </form>
  )
}
