import "./dogBreedStyles.scss";

export const SortButton = (props: {
  sortItem: any;
  sortBy: string;
  title: string;
}) => {
  const { sortItem, sortBy, title } = props;
  return (
    <div className="button-wrapper">
      <button className="button" onClick={() => sortItem(sortBy)}>
        {title}
      </button>
    </div>
  );
};
