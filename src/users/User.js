import {instantAxios} from "../aps";
import {useEffect, useState} from "react";

export default function User({match: {params}}) {
    const user = instantAxios.get('/api/users/' + params.id);

    const [users, setUser] = useState([])
    useEffect(() => {
        user.then(value => setUser(value.data.data))
    }, [params.id])

    return (
        <div>
            <h3>{users.id}-{users.email}-{users.first_name}-{users.last_name}</h3>
            <img src={users.avatar} alt="user"/>
        </div>
    )
}