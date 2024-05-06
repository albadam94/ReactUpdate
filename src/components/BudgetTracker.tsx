import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>+
        <div className='flex justify-center'>

        </div>
        <div className='flex flex-col justify-center items-center gap-8'>
            <button type="button"
                className="raleway bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
                    Reset
            </button>
            <AmountDisplay
                label="Presupuesto"
                amount={300000}
            />
               <AmountDisplay
                label="Disponible"
                amount={50000}
            />
               <AmountDisplay
                label="Gastado"
                amount={250000}
            />
        </div>

    </div>
  )
}

export default BudgetTracker