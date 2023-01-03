import { Navigate, Route, Routes } from "react-router";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from "./Color";
import { useState } from "react";

export default function App({ colors: _colors }) {
  const [colors, setColors] = useState(_colors);

  const getColor = (colorTest) =>
    colors.find((color) => color.name === colorTest);

  const addColor = (color) => {
    setColors((colors) => {
      colors.unshift({ name: color.name, color: color.color });
      return colors;
    });
  };

  return (
    <Routes>
      <Route
        exact
        path="/colors"
        element={<ColorList colors={colors} />}
      />
      <Route
        exact
        path="/colors/new"
        element={<ColorForm addColor={addColor} />}
      />
      <Route
        exact
        path="/colors/:color"
        element={<Color getColor={getColor} />}
      />
      <Route path="*" element={<Navigate to="/colors" />} />
    </Routes>
  );
}

App.defaultProps = {
  colors: [
    { name: "red", color: "red" },
    { name: "green", color: "green" },
    { name: "blue", color: "blue" },
  ],
};
