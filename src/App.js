import './App.css';
import User from "./component/characterComponent/character.component";
import Post from "./component/Post";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Userdetail from "./component/characterComponent/Userdetail";
import Postdetail from "./component/characterComponent/Postdetail";

function App() {
    return (
        <Router>
            <div>
            <div>
                <Link to={'info'}>
                    to info
                </Link>
            </div>
            <Link to={'inventory'}>
                to inventory
            </Link>
                  <Switch>
                      <Route exact={true} path={'/info'} render={(props)=><User {...props}/>}/>
                      <Route exact={true} path={'/inventory'} render={(props)=><Post {...props}/>}/>
                      <Route exact={true} path={'/info/:id'} render={(props)=><Userdetail {...props}/>}/>
                      <Route exact={true} path={'/inventory/:id'} render={(props)=><Postdetail {...props}/>}/>
                  </Switch>
            </div>
        </Router>
    );
}

export default App;
