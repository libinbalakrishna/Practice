import { ErrorTypes } from "./DogBreedModel";

export const ErrorMessage = (props: { errorType: any }) => {
  return (
    <div>
      {props.errorType === ErrorTypes.NO_RESULT
        ? `Sorry, please search again with other input!`
        : `We are facing some technical error, please try after some time`}
    </div>
  );
};
