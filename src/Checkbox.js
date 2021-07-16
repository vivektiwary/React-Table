import React from "react";

const Checkbox = ({ value, handleCheckboxChange, row }) => {
  return (
    <input
      type="checkbox"
      checked={value && value.id === row.id}
      onChange={() => handleCheckboxChange(row)}
    />
  );
};

export default Checkbox;
