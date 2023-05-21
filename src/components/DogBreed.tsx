import React, { useState, useCallback, useRef } from "react";
import { DogBreedModel, ErrorTypes } from "./DogBreedModel";
import { DogBreedList } from "../components/DogBreedList";
import "./dogBreedStyles.scss";
import { ErrorMessage } from "../components/ErrorMessage";
import { SortBreed } from "./SortBreed";
import useDebounce from "../components/hooks/useDebounce";

export const DogBreed = () => {
  const [breedList, setBreedList] = useState<DogBreedModel[]>([]);
  const [error, setError] = useState("");
  const { debounce } = useDebounce();
  const inputElem = useRef<HTMLInputElement>(null);

  const getBreedList = async (inputValue: string) => {
    try {
      if (inputValue !== "") {
        setError("");
        const url = `https://api.thedogapi.com/v1/breeds/search?name=${inputValue}`;
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            api_key:
              "live_BN3BaC3yQ6m7B5yKSOAMso4sCsWu5wV3y2k7zEGgCdivhUOuYpYBmKbfjJSshUFU" //save api key in secret file
          }
        });
        const result: DogBreedModel[] = await response.json();
        if (result.length) {
          setBreedList(result);
        } else {
          setError(ErrorTypes.NO_RESULT);
        }
      }
    } catch (error) {
      //do the error handling here
      console.log("Exception while fetching the data", error);
      setError(ErrorTypes.UNKNOWN_EXCEPTION);
      setBreedList([]);
    }
  };

  const handleSearch = useCallback(
    debounce((inputVal: string) => getBreedList(inputVal), 1000),
    []
  );

  const sortItem = (sortBy: string) => {
    switch (sortBy) {
      case "name": {
        // sort by name
        const sortedArray = breedList.sort(function (a, b) {
          const value1 = a.name.toUpperCase(); // ignore upper and lowercase
          const value2 = b.name.toUpperCase(); // ignore upper and lowercase
          if (value1 > value2) {
            return 1;
          }
          if (value1 < value2) {
            return -1;
          }
          // names must be equal
          return 0;
        });
        setBreedList([...sortedArray]);
        break;
      }
      case "height": {
        const sortedArray = breedList.sort((a, b) => {
          const value1 = parseInt(a.height.metric.split("-", 1)[0], 10),
            value2 = parseInt(b.height.metric.split("-", 1)[0], 10);
          return value1 - value2;
        });
        setBreedList([...sortedArray]);
        break;
      }
      case "lifespan": {
        const sortedArray = breedList.sort((a, b) => {
          const value1 = parseInt(a.life_span.split("-", 1)[0], 10),
            value2 = parseInt(b.life_span.split("-", 1)[0], 10);
          return value1 - value2;
        });
        setBreedList([...sortedArray]);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div>
      <div className="search-wrapper">
        <div className="search-bar">
          <input
            ref={inputElem}
            type="text"
            onChange={() => handleSearch(inputElem.current?.value)}
            placeholder={"Search for breeds by name"}
          />
        </div>
        <div className="sort-items-wrapper">
          <SortBreed sortItem={sortItem} />
        </div>
      </div>
      {error !== "" ? (
        <ErrorMessage errorType={error} />
      ) : (
        <DogBreedList list={breedList} />
      )}
    </div>
  );
};
