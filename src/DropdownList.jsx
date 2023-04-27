// THIS IS DROPDOWN LIST FOR PRACTICE

import React from "react";

function DropdownList() {
  const [color, setColor] = React.useState("");

  function handleChange(e) {
    // setColor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setColor(e.target.value);
  }
  console.log(color);
  return (
    <div>
      <h1>Dropdown List</h1>
      <form>
        <label htmlFor="color">What is your favourite color?</label>
        <select id="color" value={color} onChange={handleChange} name="color">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
        </select>
      </form>
    </div>
  );
}

export default DropdownList;
