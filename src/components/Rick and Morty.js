export  default function User (props){
    const {character}=props
    return (
        <div>

            <h3>{character.id} {character.name}</h3>
           <p>{character.status}</p>



        </div>
    )

}