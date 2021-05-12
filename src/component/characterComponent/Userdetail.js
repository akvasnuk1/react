import {getharacters} from "../../aps";
import {useEffect, useState} from "react";
export default function Userdetail({match:{params}}){
    console.log(params);
    const [info,setInfo]=useState([])
    useEffect(()=>{
        getharacters().then(value =>setInfo([...value.data]))
    },[])
    let findUser=info.find(value => value.id===+params.id)
return (
<div>
     <h3>{findUser?.id}-{findUser?.name}-{findUser?.born}-{findUser?.bio.text}-{findUser?.bio.url}</h3>
</div>
)
}