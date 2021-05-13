import './App.css';
import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {instantAxios} from "./aps";
import Users from "./users/Users";
import User from "./users/User";

function App() {
    const x = 1;
    const [newX, setX] = useState(x)
    const users = instantAxios.get('/api/user?page=' + newX);
    const [user, setUsers] = useState([])

    useEffect(() => {
        users.then(value => setUsers(value.data.data))
    }, [newX])

    return (
        <Router>
            <div>
                {
                    user.map(value => <Users key={value.id} item={value}/>)
                }
                <button onClick={() => setX(x - 1)}>To previous</button>
                <button onClick={() => setX(x + 1)}>To next</button>
                <Switch>
                    <Route exact path={'/:id'} render={(props) => <User {...props}/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
