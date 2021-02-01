import React, { createContext, useState, useEffect } from "react";
import { getFirestore } from './firebase';

export const DataContext = createContext();

    const DataProvider = ({ children }) => {

        const [listOfItems,setListOfItems] = useState([]);
        const [juguetes, setJuguetes] = useState([]);

        useEffect(() => {
      
          const db = getFirestore();
          const itemCollection = db.collection("items");


          const category = itemCollection.where('categoryId', '==', 'juguetes');
          category.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0) {
              console.log('no results');
            }
            setJuguetes(querySnapshot.docs.map(doc => doc.data()));
          })
          console.log(juguetes)


          itemCollection.get().then((querySnapshot) =>{
            const products = []
            querySnapshot.docs.forEach(doc =>{
              products.push({id:doc.id,...doc.data()})
            })
            setListOfItems(products)
            console.log(products)
            console.log(listOfItems)

          }).catch((error) =>{
            console.log(error)
          })
          //   console.log("promesa1")
          //   if(querySnapshot.size === 0){
          //     console.log('no hay resultados');
          //   }
          //   setItems(querySnapshot.docs.map(doc => doc.data()));
          // }).catch((error) => {
          //   console.log("Error", error);
          // }).finally(() => {
          // console.log(items);
          // });
        }, [])
    
        return(
            <DataContext.Provider value= {{listOfItems, juguetes}}>
                {children}
            </DataContext.Provider>
    )
    };

    export default DataProvider;