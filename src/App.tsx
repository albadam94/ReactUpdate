import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {
  const {order, addItem,removeItem,tip,setTip,placeOrder} = useOrder( )

  return (
    <>
      <header className="bg-black py-5">
        <h1 className="poppins-bold text-center text-4xl text-white">Calculadora de Propinas y Consumo </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className="p-5">
              <h2 className="poppins-semibold text-3xl">Menú</h2>
              
              <div className="space-y-3 mt-10">
              {menuItems.map(item=>(
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
                
                />
              ))}
              </div>
          </div>
          
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
                <OrderContents
                order={order}
                removeItem={removeItem}
                />
                <TipPercentageForm
                setTip={setTip}
                tip={tip}
                />
                <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
                />
          </div>
      
      </main>
      <footer className="bg-black py-3 items-center">
            <p className=" text-center text-white mb-5 mt-10">Hecho en React con Tailwind CSS y Typescript</p>
      </footer>
    </>
  )
}

export default App
