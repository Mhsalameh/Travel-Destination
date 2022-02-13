import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Tours from '../Tours/Tours'
const db = require('../../data/db.json')
export default function Home(){
  return(<>
    <Header/>
    <Tours data={db}/>
    <Footer/>
    </>
  )
}