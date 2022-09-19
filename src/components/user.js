import User from "./Rick and Morty";
import {useState} from "react";


function Characters() {


let [characters,setCharacter]=useState([])
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacter(value.results)


            }
        )

return (
    <div>
        {characters.map((character)=>(<User  key={character.id} character={character}/>))

        }

    </div>
)

}
export default Characters()

