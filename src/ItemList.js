import React, { useState, useEffect, useContext } from 'react';
import Item from './Item';
import DataContext from './DataContext'
import data from './data.json';





const ItemList = () => {
   const listOfItems = useContext(DataContext)
   console.log( listOfItems);
  // const getPromise = (listOfItems) => {
  //    return new Promise((res, rej) => {
  //      setTimeout(() => {
  //        return res(listOfItems)
  //      }, 3000)
  //    })
  //  }
  //  const [item,setItem] = useState([]);
  //  useEffect(() => {
  //   getPromise(listOfItems).then(result => {
  //        setItem(result);
  //      });
  //      console.log(item)

  //     },[])



// const { items } = useContext(DataContext)
// console.log(items);
// const getPromise = (items) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       return res(items)
//     }, 3000)
//   })
// }

//     const [item,setItem] = useState([]);

//     useEffect(() => {

//       getPromise(items).then(result => {
//           setItem(result);
//       });


//     },[])


    return(
      <div>

      </div>

  //     item.map((items, i) => {
  //       // const image= require(`./img/${items.pictureUrl}`)
  //       return (
  //         <div key={i} className="items__Container flex-jc-sb">
  //           <Item title={items.title} desc={items.desc} id={items.id}/>
  //         </div>
  //  )
  //    })





    //   items.map((item, i) => {
    //       const image= require(`./img/${item.pictureUrl}`)

    //  

    //       <div key={i} className="items__Container flex-jc-sb">
    //       <Item title={item.title} image={image.default} desc={item.desc} id={item.id}/>
    //       </div>

    //   )
    // })
    );
    }

    
    export default ItemList
