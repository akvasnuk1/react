import {useEffect, useState} from "react";
import {getinventory} from "../aps";
import Inventory from "./Postss";

export default function Post(props){
     const {match:{url}}=props
     const [inventory,setInventory]=useState([])
     useEffect(()=>{
          getinventory().then(value => setInventory([...value.data]))
     },[])
     return (
     <div>
          {
               inventory.map(value => <Inventory key={value.id} item={value} url={url}/>)
          }
     </div>
);
}