import React, { useState, useContext } from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import {getFirestore} from "../firebase"


const Cart = () =>{
    const { cart, total} = useContext(CartContext)

    const [carrito,setCarrito] = useState([])
    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [compra,setCompra] = useState("")

    const cargarCompra = (e) => {
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
        })
    }


    return(
        <div className="container section">
            {cart.length > 0 ?(
            <h1>Comprar</h1>
            )
            :
            (<div>
                <h1>No hay nada en el carrito</h1>
                <Link className="items__button" to={"/"}>
                        Ver productos
                </Link>
            </div>
            )}

            <div className="container flex flex-f-s flex-ai-c itemsContainer">
                {cart.length > 0 && cart.map(product => { 
                return(
                <CartItem key={product.id}
                    id = {product.id} title={product.title} image={product.image} price = {product.price}
                    amount={product.amount} />)
                 }
                )}
            </div>

            {cart.length > 0 &&
            <div className="compraTotal">
                <h1>Total: ${total}</h1>
                <div>
                <form onSubmit={cargarCompra}>
                <div className="input">
                  <div>
                      <p>Nombre</p>
                      <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} type="text"/>
                  </div>
                  <div>
                  <p>Teléfono</p>
                      <input value={telefono} onChange={(e)=>{setTelefono(e.target.value)}} type="text"/>
                  </div>
                  <div>
                  <p>Email</p>
                      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
                  </div>
                  </div>
                  <button className="items__button" type="submit">Comprar</button>
              </form>

                </div>
            </div>
            }
            
        </div>
    )
}

export default Cart