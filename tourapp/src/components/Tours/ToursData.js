export default function ToursData (props){

    return(
        <>
        <div>
            <p>{props.name}</p>
            <img src={props.image}></img>
        </div>
        </>
    )
}