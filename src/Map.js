function Maps (u){   //imp = properties treated as objects while calling
    //props.name ="hello"  //you cant modify the value of props ,i.e u cant change value in child component
        console.log(u);
        return(
    <div>  
        <h1>it is Map user name = {u.name}</h1>
         <p>this is {u.age}</p> 
         <p>this is {u.location}</p> 
        {/* <p>this is {props.location}</p>    */}
    </div>
           
        )
    }
    export default Maps