import { Routes, Route, Navigate, useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import "./App.css";

import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";

export default function App({ dogs }) {
  const getDog = (name) =>
    dogs.find((dog) => {
      return dog.name.toLowerCase() === name.toLowerCase();
    });

  return (
    <Routes>
      <Route exact path="/cat" element={<div>Hi</div>} />
      <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
      <Route
        exact
        path="/dogs/:name"
        element={<DogDetails getDog={getDog} />}
      />
      <Route path="*" element={<Navigate to="/dogs" replace />} />
    </Routes>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};
