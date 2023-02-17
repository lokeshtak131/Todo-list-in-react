import React, { useState } from "react";

export default function InputCheckbox({ label }) {
  const [checked, setChecked] = useState(false);
  // checkbox  function start //
  const itemChecked = (index) => {
    setChecked(!checked);
  };
  // checkbox  function end //
  return (
    <div className="left-list">
      <input
        className="form-check-input me-3"
        onClick={(index) => itemChecked(index)}
        type="checkbox"
        name=""
      />
      <span
        className={`${checked ? "isActive" : "unActive"}`}
        // className={isChecked(item)}
      >
        {label}
      </span>
    </div>
  );
}
