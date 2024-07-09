import { useState } from "react";




    
function Headercomponent(props) {
    const [isClicked,setIsClicked]=useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    <div><h1>NAME: {props.name}</h1>
    <p className="Regno"> RegisterNo: {props.regno}</p>
    <button onClick={handleClick} className="toggle-button">
        {isClicked ? 'Hide Details' : 'Show Details'}
      </button>
      {isClicked && (
        <p className="message">
         Additional details or content can go here...
        </p>
      )}
    </div>
    
  )
}

export default Headercomponent;