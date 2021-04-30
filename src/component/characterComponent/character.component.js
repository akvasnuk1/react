
export default function User(props) {
    let {id, name, age, isMarried,onClick} = props;

    return (
        <div>
            <h3>{id} {name} {age} {isMarried.toString()}
                <button onClick={() => onClick(id)}>Delete user</button>
            </h3>
        </div>
    );
}
