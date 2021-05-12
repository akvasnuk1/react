import {Link} from "react-router-dom";
export default function Inventory({item,url}){
  return (
<div>
    <h3>{item.id}-{item.title}-<Link to={url+'/'+item.id}>to  details</Link></h3>
</div>
);
}