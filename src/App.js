import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";
import User from "./components/Rick and Morty";
function App() {

    return (
        <div className='wrap'>
            <SimpsonComponent
                itemName={'Bart'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <SimpsonComponent
                itemName={'Homer '}
                pic={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <SimpsonComponent
                itemName={'Marge'}
                pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <SimpsonComponent
                itemName={'Liza'}
                pic={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />
            <SimpsonComponent
                itemName={'Maggie'}
                pic={'https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png'}
            />


        </div>


    );
    return (
        <div>
        <User/>
        </div>
    )
}
export default App

