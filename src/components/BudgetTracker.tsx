import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"
import 'react-circular-progressbar/dist/styles.css'

const BudgetTracker = () => {
    const {state,totalExpenses,remainingBudget,dispatch}=useBudget()
    const percentage=+(totalExpenses / state.budget * 100).toFixed(2)
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>+
        <div className='flex justify-center'>
        <CircularProgressbar 
        value = {percentage}
        text={`$${totalExpenses}`}
        styles={buildStyles({
            textColor: 'black',
            pathColor: 'pink',
            trailColor: 'gray',
            textSize:8 
        })}
        />
        </div>
        <div className='flex flex-col justify-center items-center gap-8'>
            <button type="button"
                className="raleway bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                onClick={() => dispatch({ type: 'reset-app' })}
                >
                    Reset
            </button>
            <AmountDisplay
                label="Presupuesto"
                amount={state.budget}
            />
               <AmountDisplay
                label="Disponible"
                amount={remainingBudget}
            />
               <AmountDisplay
                label="Gastado"
                amount={totalExpenses}
            />
        </div>

    </div>
  )
}

export default BudgetTracker