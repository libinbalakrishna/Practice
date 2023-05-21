import "./dogBreedStyles.scss";
export const DogBreedCardItem = (props: { name: string; value: string }) => {
  const { name, value } = props;
  return (
    <div className="item">
      <span className="item-name">{name}</span>
      {":"}
      <span className="item-value">{value}</span>
    </div>
  );
};
