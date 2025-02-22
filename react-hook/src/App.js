import './styles.css'
import StateInClassBase from "./diff_class_&_fun/StateInclassBase";
import StateInFunction from "./diff_class_&_fun/StateInFunction";
import Blog from './Blog';
import LoginPage from './CustomHook/LoginPage';
import { useState } from 'react';
import ResetPassword from './CustomHook/ResetPass';

function App() {
  const[form, setForm] = useState("login");
  return (
    <div className="App">
      {/* <h3>Class Base Component</h3> */}
         {/* <StateInClassBase/> */}

         {/* <h3>Function Base Component</h3> */}
         {/* <StateInFunction/> */}

         {/* <h1>Write a Blog</h1> */}
         {/* <Blog/> */}


         {/* Custom_Hook */}

         <div>
         <h2>Welcome!</h2>
         {form == 'login'? <LoginPage/>:<ResetPassword/>}

         <button onClick={()=>{setForm(form ==="login"?"reset":"login")}}>
          {form === "login"?"Forgot Password":"Back to login"}
         </button>
         </div>
    </div>
  );
}

export default App;
