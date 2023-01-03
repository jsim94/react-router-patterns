import { useParams, Navigate } from "react-router";
import "./DogDetails.css";

export default function DogDetails({ getDog }) {
  const { name } = useParams();
  const dog = getDog(name);
  if (!dog) {
    return <Navigate to="/dogs" />;
  }
  return (
    <div className="DogDetails">
      <img src={dog.src} />
      <div>
        <h3>{dog.name}</h3>
        <p>Age: {dog.age}</p>
        Facts:
        <ul>
          {dog.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
