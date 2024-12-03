import React, { useRef } from "react";

function UncontrolledForm() {
  // useRef is a React hook that allows you to reference DOM elements directly.

  const nameRef = useRef(); // This creates a reference for the input field.

  const handleSubmit = (event) => {
    // Prevents the default form submission behavior (which would reload the page)
    event.preventDefault();

    // nameRef.current refers to the DOM node (the input element), and we can access its value.
    alert("Submitted Name: " + nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 
        The 'ref' attribute links the input element to the 'nameRef' reference. 
        This allows us to directly interact with the DOM element without needing to store its value in React state.
      */}
      <label>
        Name:
        {/* 'ref={nameRef}' associates the input field with the 'nameRef' reference. */}
        <input type="text" ref={nameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
