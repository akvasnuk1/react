import {getinventory} from "../../aps";
import {useEffect, useState} from "react";
export default function Userdetail({match:{params}}){
    const [info,setInfo]=useState([])
    useEffect(()=>{
        getinventory().then(value =>setInfo([...value.data]))
    },[])
    let findUser=info.find(value => value.id===+params.id)
    return (
        <div>
            <h3>{findUser?.id}-{findUser?.title}-{findUser?.category}-{findUser?.slogan}-{findUser?.price}-{findUser?.stock}</h3>
        </div>
    )
}