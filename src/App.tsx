import "./styles.scss";
import { DogBreed } from "./components/DogBreed";
export default function App() {
  return (
    <div className={"mainWrapper"}>
      <div className="title">Hello! Explore Dogs and have fun!!!</div>
      <div>
        <DogBreed />
      </div>
    </div>
  );
}
