import { useEffect, useState } from "react"
import Header  from "./components/Header"
import Guitar from "./components/Guitar"
import Footer from "./components/Footer"
import {db} from "./data/db"


function App( ) {

  //LocalStoragePersistente
  const initialCart = ( ) => {
    const localStorageCart = localStorage.getItem("cart")
    return localStorageCart ? JSON.parse(localStorageCart) : [ ]
  }
  //State
  const [data, setData] = useState(db)
  const [cart, setCart] = useState(initialCart( ) )

  const MAX_ITEMS = 10
  const MIN_ITEMS = 1

  //Aplicación del LocalStorage
  useEffect (() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  //Funciones Carrito
  function addToCart ( item ) {
    const itemExists =cart.findIndex (guitar=> guitar.id=== item.id)
      if (itemExists >=0){ //item existe en el cart
        if (cart[itemExists].quantity >= MAX_ITEMS)return
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
//Funcion remover producto
  function removeFromCart (id ){
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  //Funcion incrementar producto
  function increaseQuantity (id){
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS ){
        item.quantity++
      }
      return item
     
    })
    setCart(updateCart)
  }

  //Funcion decrementar producto
  function decreaseQuantity (id){
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity >MIN_ITEMS){
        item.quantity--
      }
      return item
    })
    setCart(updateCart)
  }

//Eliminar carro
  function deleteCart(){
    setCart([])
  }


  return (
    <>
     
    <Header
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      deleteCart={deleteCart}
      
    />

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
