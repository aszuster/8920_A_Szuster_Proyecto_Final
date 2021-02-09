import React, { createContext, useState, useEffect } from "react";
import { getFirestore } from '../firebase';

export const DataContext = createContext();

    const DataProvider = ({ children }) => {

        const [listOfItems,setListOfItems] = useState([]);

        useEffect(() => {
      
          const db = getFirestore();
          const itemCollection = db.collection("items");

          itemCollection.get().then((querySnapshot) =>{
            const products = []
            querySnapshot.docs.forEach(doc =>{
              products.push({id:doc.id,...doc.data()})
            })
            setListOfItems(products)

          }).catch((error) =>{
            console.log(error)
          })
        }, [])
    
        return(
            <DataContext.Provider value= {{listOfItems}}>
                {children}
            </DataContext.Provider>
    )
    };

    export default DataProvider;