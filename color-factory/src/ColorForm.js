import { useState } from "react";
import { useNavigate } from "react-router";

export default function ColorForm({ addColor }) {
  const [fData, setFData] = useState({ name: "", color: "" });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFData((fData) => {
      fData[name] = value;
      return { ...fData };
    });
  };

  const handleAdd = (evt) => {
    evt.preventDefault();
    addColor(fData);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleAdd} style={{ margin: "30px" }}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={fData.name}
        />
      </div>
      <div>
        <label>Color:</label>
        <input
          type="color"
          name="color"
          onChange={handleChange}
          value={fData.color}
        />
      </div>
      <input type="submit" value="Add Color" />
    </form>
  );
}
