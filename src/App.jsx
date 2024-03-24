import { useState } from "react"
import Header  from "./components/Header"
import Guitar from "./components/Guitar"
import Footer from "./components/Footer"
import {db} from "./data/db"


function App( ) {

  //State
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([ ])

  function addToCart ( item ) {

    const itemExists =cart.findIndex (guitar=> guitar.id=== item.id)
      if (itemExists >=0){ //item existe en el cart
        const updateCart =[...cart]
        updateCart[itemExists].quantity++
        setCart(updateCart) //Actualiza la cantidad
        console.log("Ya Existe...")
      }else{
        item.quantity =1
        console.log ("No existe...Agregando")
        setCart([...cart, item])
      }
      
  
  } 

  return (
    <>
     
    <Header />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        < div className="row mt-5">
          {data.map((guitar ) => (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                setCart={setCart}
                addToCart={addToCart}
              />
          ))}
        
            

        </div>
    </main>


    <Footer />

      
    </>
  )
}

export default App
