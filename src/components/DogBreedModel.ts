export interface DogBreedModel {
  bred_for: string;
  breed_group: string;
  height: Unit;
  weight: Unit;
  id: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  life_span: string;
}

interface Unit {
  imperial: string;
  metric: string;
}

export const ErrorTypes = {
  NO_RESULT: "NO_RESULT",
  UNKNOWN_EXCEPTION: "UNKNOWN_EXCEPTION"
};
