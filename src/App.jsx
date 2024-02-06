import { useState } from "react";
import "./App.css";

function App() {
  const [gender,setGender] = useState('')
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true)
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  return (
    <>
      {!submitted && <h1>Please provide us information so we can sell it to advertisers.</h1>}
      {submitted && (
         <>
         {gender === "male" && <h1>Hello Mr.{name}.</h1>}
         {gender === "female" && age <= 30 && <h1>Hello Ms.{name}.</h1>}
         {gender === "female" && age > 30 && <h1>Hello Mrs.{name}.</h1>}
         {gender !== "male" && gender !== "female" && <h1>Hello {name}.</h1>}
       </>
     )}
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleName} />
        </label>

        <label>
          <br />
          <br />
          Age:
          <input type="number" name="age" onChange={handleAge} />
        </label>
          <br />
          <br />
        <label>
          Gender:
          <select value={gender} onChange={handleGender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="female">Other</option>
              Coconut
          </select>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
