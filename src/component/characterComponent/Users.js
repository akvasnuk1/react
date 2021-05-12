import './user.css'
import {Link,useParams} from "react-router-dom";
export default function Users({item,url}){
       return (
<div>
       <h3>{item.id}-{item.name}{item.born}-<Link to={url+'/'+item.id}>to details</Link></h3>
</div>
)
}