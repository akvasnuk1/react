import './App.css';
import Car from "./component/characterComponent/character.component";
import {useState} from "react";

const listUsers = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];


function App() {
    const [users, setUsers] = useState(listUsers);

    const deleteUsers = (id) => {
        const newArr = users.filter(user => user.id !== id);
        setUsers(newArr)
    };

    let number = 2;
    const [counter, setCounter] = useState(number);
    const increment = () => setCounter(++counter);
    const decrement = () => setCounter(--counter);
    const reset = () => setCounter(0)

    return (
        <div>
            <div>
                <h3>{counter}</h3>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>
            {
                users.map((value, index) =>
                    <Car key={index}
                         {...value}
                         onClick={deleteUsers}
                    />
                )
            }
        </div>
    );
}

export default App;
