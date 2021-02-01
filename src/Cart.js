import React, { useEffect,useState, useContext } from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import {getFirestore} from "./firebase"


const Cart = () =>{
    const { cart, emptyCart, total} = useContext(CartContext)
    // cart.map(item => console.log(item))
    console.log("iniciando carrito...", cart)

    const [carrito,setCarrito] = useState([])
    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [compra,setCompra] = useState("")

    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer : {
                name : nombre,
                phone : telefono,
                email : email
            },
            items : [...carrito],
            total : total
        }
        
        const db = getFirestore()
        const OrderCollection = db.collection("orders")
        OrderCollection.add(datosCompra).then((resultado)=>{
            setCompra(resultado.id)

            const Itemscollection = db.collection("items")
            const batch = getFirestore().batch()

            carrito.forEach(item=>{
                batch.update(Itemscollection.doc(item.id),{stock:0})
            })

            batch.commit()
            .then(()=>{
                console.log("Termino bien")
            })
        })
    }


    return(
        <div className="container">
            {cart.length > 0 ?(
            <h1>Comprar</h1>
            )
            :
            (<div>
                <h1>No hay nada en el carrito</h1>
                <Link to={"/"}>
                    <button onClick={emptyCart}>
                        Ver productos
                    </button>
                </Link>
            </div>
            )}

            <div>
                {cart.length > 0 && cart.map(product => { 
                console.log("mapeando...", product)
                return(<CartItem key={product.id}
                    id = {product.id} title={product.title} image={product.image} price = {product.price}
                    amount={product.amount} />)
                 }
                )}
            </div>

            {cart.length > 0 &&
            <>
                <h2>Total: ${total}</h2>
                <div>
                <form onSubmit={manejarCompra}>
                  <div>
                      <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} type="text"/>
                  </div>
                  <div>
                      <input value={telefono} onChange={(e)=>{setTelefono(e.target.value)}} type="text"/>
                  </div>
                  <div>
                      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
                  </div>
                  <button type="submit">Comprar</button>
              </form>
                    <button onClick= {emptyCart}>
                        Sacar del carrito
                    </button>
                    <button onClick={() => {console.log(cart)}}>
                        Pagar
                    </button>
                </div>
            </>
            }
            
        </div>
    )
}

export default Cart