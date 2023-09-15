import React from 'react';
import ReactDOM from 'react-dom/client';

import APP from './App';
import reportWebVitals from './reportWebVitals';
// import { person } from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));

// class componenets (class names ,must be in capital letters)
// class New_menu extends React.Component {
// render() { 
//   let menus =
//     ['hello','about','home']
//   return (
// <header>
//   <ul>
//     <li>{menus[0]}</li>
//     <li>{menus[1]}</li>
//     <li>{menus[2]}</li>
//   </ul>
// </header>)
  
// }
// }

// function Header(){
// console.log(person);

//  return ( 
//  <header>
//    <ul>  
//      <li>menus[0]</li>
//      <li>menus[1]</li>
//      <li>menus[2]</li>
//    </ul>
//  </header>)}
  root.render(   //APP()
 <React.StrictMode>
  <APP />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
