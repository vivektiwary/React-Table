import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import { useState } from "react";

export default function App() {
  const [checkedItem, setCheckedItem] = useState({});
  const handleCheckboxClick = (item) => {
    setCheckedItem(item);
  };
  const tableData = {
    columns: [
      { label: "Name", field: "name" },
      { label: "Age", field: "age" }
    ],
    rows: [
      {
        id: 1,
        name: "Vivek",
        age: "27"
      },
      {
        id: 2,
        name: "Tom",
        age: "35"
      }
    ]
  };
  return (
    <div className="App">
      <Table
        tableData={tableData}
        checkbox
        handleCheckboxClick={handleCheckboxClick}
        selectedRow={checkedItem}
      />
      {Object.keys(checkedItem).length > 0 && (
        <div>
          You have selected: {checkedItem.name} - {checkedItem.age}
        </div>
      )}
    </div>
  );
}
