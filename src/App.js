import Footer from './Footer';
import Header from './Header';
import User from './User';
import Map from './Map';
import Different from "./Different"

let users = [
 {
  name:'umesh',
 age:25,location:'hyd'},
 { 
  name:'kumar',
 age:26,location:'pune'}
]
function App(){
  return(
  <><Footer/>
  <Different/>
  <Header/>
  <Map/>
  <User name='umesh' age='16'/>
  {/*map method */}
  {
  users.map( 
    (u)=>{
      return <Map key={u.age} name={u.name} age={u.age} location={u.location}/>
    }
  )
    }</>
  )
}
export default App;