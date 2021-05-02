import './App.css';
import {useState,useEffect} from "react";
import User from "./component/characterComponent/character.component";

function App() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers([...value]))
    }, [])
    let [user,setUser]=useState(null)
    const search=(id)=>{
         let user=users.find(value => value.id===id)
    }
    return (
        <div className={'main'}>
            <div className={'users'}>
                {
                    users.map(value => <User key={value.id} item={value} search={search}/>)
                }
            </div>
            <div className={'user'}>
                {
                    user&&<h2>{user.name}-{user.username}</h2>
                }
            </div>
        </div>

    );
}

export default App;
