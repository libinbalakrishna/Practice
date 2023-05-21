import "./dogBreedStyles.scss";
import { DogBreedModel } from "./DogBreedModel";
import { useState } from "react";
import { DogBreedCardItem } from "./DogBreedCardItem";

export const DogBreedCard = (props: { data: DogBreedModel }) => {
  const { data } = props;
  const [isImageLoading, setImageLoading] = useState(true);
  const handleOnLoad = () => {
    setImageLoading(false);
  };
  return (
    <div key={data.id} className="card-wrapper">
      <div className="card-title">{data.name}</div>
      <div className="card-details-wrapper">
        {data?.reference_image_id && (
          <div className="image-wrapper">
            {isImageLoading && <div className="loader"></div>}
            <img
              className="image"
              alt="dog"
              src={`https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`}
              onLoad={handleOnLoad}
            ></img>
          </div>
        )}
        <div className="details-wrapper">
          {data.breed_group && (
            <DogBreedCardItem name={"Breed group"} value={data.breed_group} />
          )}
          {data.temperament && (
            <DogBreedCardItem name={"Temperament"} value={data.temperament} />
          )}
          {data.weight.metric && (
            <DogBreedCardItem
              name={"Weight"}
              value={`${data.weight.metric} kgs`}
            />
          )}
          {data.height.metric && (
            <DogBreedCardItem
              name={"Height"}
              value={`${data.height.metric} centimeters`}
            />
          )}
          {data.life_span && (
            <DogBreedCardItem name={"Life span"} value={data.life_span} />
          )}
          {data.bred_for && (
            <DogBreedCardItem name={"Bred for"} value={data.bred_for} />
          )}
        </div>
      </div>
    </div>
  );
};
