import { useState } from "react";
import "./add-thing.css";

export default function AddThing(props) {
  const [name, setName] = useState("");

  const onChange = (evt) => {
    if (evt.target.name === "thingname") {
      setName(evt.target.value);
    }
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("Submit clicked!");
    setName("");
  }
  
  return (
    <>
      <h2>Add something:</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="thingname">The thing's name:</label>
        <input type="text" id="thingname" name="thingname" value={ name } onChange={ onChange } />
        <button type="submit">Send it!</button>
      </form>
    </>
  )
}