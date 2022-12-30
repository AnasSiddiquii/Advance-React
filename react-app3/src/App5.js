// fragment in react

import React from "react";
import "./App.css";
import Cols from "./Cols"
function App5() {
  return (
    <div className="App">
  
    {/* <React.Fragment> */}
     {/* <> */}
  
     <h1>Fragments</h1>
      <Cols />
  
     <table>
      <tbody>
        <tr>
          <td>Anas</td>
          <Cols />
        </tr>
      </tbody>
     </table>
  
    {/* </> */}
    {/* </React.Fragment> */}
  
    </div>
  );
}

export default App5;