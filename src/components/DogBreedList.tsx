import { DogBreedModel } from "./DogBreedModel";
import "./dogBreedStyles.scss";
import { DogBreedCard } from "./DogBreedCard";

export const DogBreedList = (props: { list: DogBreedModel[] }) => {
  return (
    <>
      {props.list.map((breed: DogBreedModel) => (
        <DogBreedCard data={breed} />
      ))}
    </>
  );
};
