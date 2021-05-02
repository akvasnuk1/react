import './user.css'
export default function User({item,search}) {


    return (
        <div>
            {item.name}-
            {item.username}-
            {item.email}-
            <button onClick={()=>search(item.id)}>More info about user</button>
        </div>
    );
}