
import {categories} from '../data/categories';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece=Date | null;
type Value=ValuePiece |[ValuePiece, ValuePiece];

export default function ExpenseForm() {
  return (
  <form className="space-y-5 raleway">
        <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
            Nuevo Gasto
        </legend>
        <div className="flex flex-col gap-2">
            <label htmlFor="expenseName"
            className="text-xl">
                Nombre del Gasto
            </label>
            <input 
                type="text" 
                id="expenseName" 
                className="bg-slate-100 p-2"
                placeholder="Ej. Transporte"
                name="expenseName"
            />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="amount"
            className="text-xl">
                Cantidad
            </label>
            <input 
                type="number" 
                id="amount" 
                className="bg-slate-100 p-2"
                placeholder="Añade la cantidad" 
                name="expenseName"
            />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="category"
            className="text-xl">
                Categoria
            </label>
            <select 
                id="category" 
                className="bg-slate-100 p-2"
                name="category"
            >
                <option value="">Seleccione una categoria</option>
                {categories.map(category => (
                    <option 
                    key={category.id} 
                    value={category.id}>
                    {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="amount"
            className="text-xl">
                Fecha Gasto:
            </label>
            <DatePicker
                className="bg-slate-100 p-2 border-0"
                name="date"
                format="dd/MM/yyyy"
                locale="es-ES"
            />
        </div>
        <input 
            type="submit"
            value="Agregar Gasto"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 cursor-pointer raleway"
        />
    </form>
  )
}

