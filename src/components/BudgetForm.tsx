import { useState,useMemo } from "react"

function BudgetForm() {
    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(parseInt(e.target.value))
    }

    const isValid = useMemo (() => {
        return budget > 0 || budget === 0 && budget.toString().length > 0
    }, [budget])


  return (
    <form className="space-y-5 raleway">
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center raleway">
                Definir presupuesto
            </label>
            <input 
                id="budget"
                type="number" 
                className="w-full bg-white border border-gray-300 p-2"
                placeholder="Ingresa tu presupuesto"
                name="budget"
                value={budget}
                onChange={handleChange}
            />

        </div>
            <input 
                type="submit"
                value="Definir presupuesto"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 cursor-pointer raleway disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isValid} 

            />
    
    </form>
  )
}

export default BudgetForm