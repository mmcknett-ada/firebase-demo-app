import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

import "./add-thing.css";
import app from '../firebase';

export default function AddThing(props) {
  const [name, setName] = useState("");

  const onChange = (evt) => {
    if (evt.target.name === "thingname") {
      setName(evt.target.value);
    }
  }

  const onSubmit = async (evt) => {
    evt.preventDefault();
    console.log("Submit clicked!");
    setName("");

    try {
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, "things"), {
        name: name
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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