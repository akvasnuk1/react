export default function Findpost({user}){
    console.log(user);
    return (
<div>
    <h3>{user.id}-{user.title}</h3>
</div>
)
}