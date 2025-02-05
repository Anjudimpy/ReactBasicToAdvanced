// //Functional Component

// function App(){
//   return(
//     <h1>Functional Component</h1>
//   );
// }
// export default App;


//Class Component
//And Props
// import React from "react";
// import Props, { FunProps } from './Props';
// export default class App extends React.Component{
//   render(){
//     return <>
//     <h1>Class Component</h1>
//     <Props name="JHON" marks={70}/>
//     <Props name="David" marks={79}/>
//     <Props/>
//     <FunProps name="Srin" marks={80}/>
//     <FunProps name="Asya" marks={90}/>
//     </>
//   }
// }

// Props.defaultProps = {
//   name:"Student",
//   marks:"N.A"
// }


import "./styles.css";
import React from "react";
import List from "./List"
function App() {
  return (
    <div className="App">
      <h1>Reach me</h1>
      {/* Code here */}
      <List/>
    </div>
  );
}

export default App;
