import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {
  

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="poppins-bold text-center text-4xl font-black">Calculadora de Propinas y Consumo </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className="p-5">
              <h2 className="poppins-semibold text-3xl">Menú</h2>
              
              <div className="space-y-3 mt-10">
              {menuItems.map(item=>(
              <MenuItem
                key={item.id}
                item={item}
                
                />
              ))}
              </div>
          </div>
          
          <div>
              <h2 className="poppins-semibold">Consumo</h2>

          </div>
      </main>
    </>
  )
}

export default App
