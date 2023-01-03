import { Navigate, useParams } from "react-router";

export default function Color({ getColor }) {
  const { color: _color } = useParams();
  const { color } = getColor(_color);

  if (!color) return <Navigate to="/colors" />;

  return (
    <div
      style={{ background: color, height: "100vh", width: "100vw" }}
    ></div>
  );
}
