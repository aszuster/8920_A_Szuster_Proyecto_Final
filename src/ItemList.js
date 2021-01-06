import React from "react"
import Item from './Item'
import pelota from './pelota.png'
import hueso from './hueso.jpg'
import plumero from './plumero.jpg'


const ItemList = () => {


  const items = [{
    title: 'Juguete pelota',
    pictureUrl: pelota,   //puede ser que si yo le pongo './pelota.png' no me tome la imagen y tenga que importarla? o hay otra forma?
    desc: 'Pequeña pelota para que su mascota juegue'},
    { title: 'Hueso',
      pictureUrl: hueso,
      desc: 'Hueso de hule para perro'
    },
    {
      title: 'Plumero',
      pictureUrl: plumero,
      desc: 'Plumero para que el gato juegue'
    }]

//se que tiene que haber una promesa para que los items se carguen en un tiempo mas tarde, pero no entiendo del todo cómo encajar esto
    // const promesa = new Promise ((res,rej)=>{

    // setTimeout(()=>{
    
    // let resultado = 200 //hardcodeado
    // if(resultado< 400){
    // resolver()
    // }else{
    // rechazar ()
    // }
    // }, 2000)
    // })
  
    // .then((resultado)=>{
    //     console.log("salio todo bien")
    //     console.log(resultado)
    // })
    // .catch(()=>{
    //     cnosole.log("salio todo mal")
    // })

    //aca deberia ser la parte en la que muestre la lista de productos, no uní ninguno de estos 
    //a ningún lado porque estan incompletos y solo rompería lo que ya está visualmente
    return (
        <section>
          <h1>Listado de Productos</h1>
          {items.length > 0 ? (
            items.map(items => {
              return (
                <div>
                  <Item title={items.title} pictureUrl={items.pictureUrl} desc={items.desc}/>
                </div>
              );
            })
          ) : (
            <p>No hay productos</p>
          )}
        </section>
      )}

    
    export default ItemList
