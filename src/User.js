function User(props){   //imp = properties treated as objects while calling
 //props.name ="hello"  //you cant modify the value of props ,i.e u cant change value in child component
//  console.log(props);
 return(<div>  <h1>user name is {props.name}</h1>
   <h1>age is {props.age}</h1> 
        <p>this is {props.location}</p>  </div>
       
     )
 }

// props = {
//     name : 'umesh',
//     age : 24
// }

//class components
// import React from 'react';

// class User extends React.Component{

//     render (){
//         return(
// <div>
//     <h1>user name is {this.props.name}</h1>
//     <p>Age is {this.props.age}</p> 
//     <p>Location is {this.props.location}</p>
  
// </div>
//         )
//     }
        
// }
 export default User
