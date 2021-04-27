import './character.component.css'
function CharacterComponent(props){
    return <div>
        <img src={props.img} alt="cats"/>
        <h3>Cats</h3>
        <p>
            Cats is the best pats in your life.
        </p>
    </div>
}
export default CharacterComponent;