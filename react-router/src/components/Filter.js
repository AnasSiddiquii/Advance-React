import { useSearchParams } from "react-router-dom";
function Filter() {
  const { searchParams, setSearchParams } = useSearchParams();

  console.log(searchParams.get("age"));
  console.log(searchParams.get("city"));

  const age = searchParams.get("age");
  const city = searchParams.get("city");

  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age : {age} </h3>
      <h3>City : {city}</h3>
      <input type="text" onchange={(e) => setSearchParams({ text:e.target.value})} />
      <button onClick={() => setSearchParams({ age: 40 })}>Set Age</button>
    </div>
  );
}
export default Filter;
