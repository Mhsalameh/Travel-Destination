import Home from './components/Home/Home' 
const db = require('./data/db.json')
export default function App(){
    return (
    <>
    <Home data={db}/>
    </>
    );
}

