import { Link } from "react-router-dom";

export default function ColorList({ colors }) {
  return (
    <div className="ColorList">
      <div
        style={{
          background: "#202020",
          color: "white",
          height: "150px",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h2>Welcome to the color factory.</h2>
        <Link to="/colors/new" style={{ color: "white" }}>
          <h1>Add a color</h1>
        </Link>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Please select a color.</p>
        {colors.map((color) => (
          <p>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}
