import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Return an HTML <button> from the Button functional component. 
// Use props.children in a way that will allow you to pass text easily 
// (i.e. by typing the text between the <button> tags).

// Put a <Button> inside the Application component between the <main> tags above the <h1>. 
// Pass the <Button> the text "Reset".
const Button = (props) => {
  const buttonText = props.buttonText;
  const clickEvent = props.onClick;

  return(
    <button onClick = {clickEvent}>
      {buttonText}
    </button>
  )  
};

const Application = () => {
  const [name, setName] = useState("")

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      <Button onClick={reset} buttonText="Reset" />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
