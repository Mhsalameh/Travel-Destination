import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Tours from '../Tours/Tours'

export default function Home(props){
  console.log(props);
  return(<>
    <Header/>
    <Tours data={props.data}/>
    <Footer/>
    </>
  )
}