import './App.css';
import CharacterComponent from "./component/characterComponent/character.component";


function App() {
  return (
    <div>
        <h1>Cats around US</h1>
        <div className={'MainDiv'}>
            <div><CharacterComponent img={"https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"}/>
                <CharacterComponent img={'https://timesofindia.indiatimes.com/photo/67586673.cms'}/>
                <CharacterComponent img={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'}/>
                <CharacterComponent img={'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'}/></div>
            <div><CharacterComponent img={"https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"}/>
                <CharacterComponent img={'https://timesofindia.indiatimes.com/photo/67586673.cms'}/>
                <CharacterComponent img={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'}/>
                <CharacterComponent img={'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'}/></div>
            <div><CharacterComponent img={"https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"}/>
                <CharacterComponent img={'https://timesofindia.indiatimes.com/photo/67586673.cms'}/>
                <CharacterComponent img={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'}/>
                <CharacterComponent img={'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'}/></div>
        </div>
    </div>

  );
}

export default App;
