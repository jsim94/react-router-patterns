import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import "./DogList.css";

export default function DogList({ dogs }) {
  return (
    <div className="DogList">
      {dogs.map((dog) => (
        <Link to={`/dogs/${dog.name}`}>
          <div className="DogList-Item">
            <img src={dog.src} />
            <h4>{dog.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
