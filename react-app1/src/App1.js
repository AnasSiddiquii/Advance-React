// state

// import logo from "./logo.svg";
import React,{useState} from "react";
import "./App.css";
// import User from "./User";

function App1() {
  // let data = "Anas"
  // function Apple() {
  //   data = "Amaan"
  //   alert(data)
  // }

  // let data = "Anas";
  let [data,setData] = useState(0);
  function updateData() {
    setData(data+1);
  }

  console.log(data+1);

  return (
    <div className="App">
      {/* <User /> */}
      <h1>{data}</h1>

      {/* function called from above */}
      <button onClick={updateData}>Click Me</button>

      {/* function called directly */}
      {/* <button onClick = {()=>alert("hello")}>Click Me</button> */}

      {/* function called from above */}
      {/* <button onClick = {()=>Apple()}>Click Me</button> */}
    </div>
  );
}

// class component

// class User extends Component {
//   render() {
//     return <div>Class Component</div>;
//   }
// }

// functional component

// function User()
// {
// return(
//     <div>Functional Component</div>
// )
// }

export default App1;
