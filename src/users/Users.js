import {Link, Route, Switch} from "react-router-dom";
export default function Users({item}) {
    const path='/'+item.id;

    return (
        <div>
            <h3>{item.id}-{item.name}-<Link to={path}>to details</Link></h3>

        </div>

    )
}