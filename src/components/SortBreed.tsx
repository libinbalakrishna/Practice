import "./dogBreedStyles.scss";
import { SortButton } from "./SortButton";

export const SortBreed = (props: { sortItem: any }) => {
  const { sortItem } = props;
  return (
    <div className="sort-items-wrapper">
      <span>Sort by: </span>
      <SortButton sortItem={sortItem} sortBy={"name"} title={"Name"} />
      <SortButton sortItem={sortItem} sortBy={"height"} title={"Height"} />
      <SortButton sortItem={sortItem} sortBy={"lifespan"} title={"Lifespan"} />
    </div>
  );
};
