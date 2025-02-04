// //Functional Component

// function App(){
//   return(
//     <h1>Functional Component</h1>
//   );
// }
// export default App;


//Class Component

import React from "react";
import Props from './Props';
export default class App extends React.Component{
  render(){
    return <>
    <h1>Class Component</h1>
    <Props name="JHON" marks={70}/>
    <Props name="David" marks={79}/>
    </>
  }
}
