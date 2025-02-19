import './styles.css'
import StateInClassBase from "./diff_class_&_fun/StateInclassBase";
import StateInFunction from "./diff_class_&_fun/StateInFunction";
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      {/* <h3>Class Base Component</h3> */}
         {/* <StateInClassBase/> */}

         {/* <h3>Function Base Component</h3> */}
         {/* <StateInFunction/> */}

         <h1>Write a Blog</h1>
         <Blog/>
    </div>
  );
}

export default App;
