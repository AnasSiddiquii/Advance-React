// props

function Student(props) {
    //   console.log(props);
  return (
    <div>
      <h1>Student Component</h1>
      <div style={{backgroundColor:"skyblue", padding:"3px"}}>
        <h1>{props.fname} {props.lname}</h1>
        <h1>{props.other.sub} {props.other.sec}</h1>
      </div>
    </div>
  );
}
export default Student;
