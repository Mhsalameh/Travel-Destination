import ToursData from './ToursData'
export default function Tours(props) {
    console.log(props.data);
    return (
        <>
        <h2>Tours data</h2>
        {
            props.data.map(tour=>{
                return(
                    <ToursData key={tour.id} image={tour.image} name={tour.name}
                    TourData={tour}/>
                )
            })
        }
        </>
    )
}