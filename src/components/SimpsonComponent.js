export default function SimpsonComponent (props) {
    console.log(props);
    let {itemName, pic} = props;


    return (
        <div className="card">
            <h2>{itemName}</h2>
            <img src={pic}/>
        </div>
    )
}

