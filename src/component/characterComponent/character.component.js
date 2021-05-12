import {getharacters} from '../../aps'
import {useEffect, useState} from "react";
import Users from "./Users";
export default function User({match:{url}}) {
    const [info,setInfo]=useState([])
    useEffect(()=>{
        getharacters().then(value =>setInfo([...value.data]))
    },[])
    return (
        <div className={'main'}>
                {
                    info.map(value => <Users key={value.id} item={value} url={url}/>)
                }
            </div>


    );
        }
