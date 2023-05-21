import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DogBreed } from "../components/DogBreed";

// import useDebounce, * as hooks from "../components/hooks/useDebounce";

import { renderHook, act } from "@testing-library/react-hooks";
import useDebounce from "../components/hooks/useDebounce";

//jest.mock("hooks");

// describe("Test", () => {
//   it("should call the api after 1000ms after typing", async () => {
//     const mockHook = jest.fn();
//     jest.spyOn(hooks, "default").mockImplementation(mockHook);
//     render(<DogBreed />);
//     const input = screen.getByPlaceholderText("Search for breeds by name");
//     userEvent.type(input, "A");
//     expect(mockHook).not.toHaveBeenCalledWith("A");
//     await waitFor(() => expect(mockHook).toHaveBeenCalledWith("A"), {
//       timeout: 1100
//     });
//     jest.clearAllMocks();
//   });
// });

describe("useDebounce", () => {
  test("should debounce function calls", async () => {
    // const { result } = renderHook(() => useDebounce());
    // const fn = jest.fn();
    // const debounedFn = result.current.debounce(fn, 1000);
    //Invoke function multiple times
    // debounedFn();
    // debounedFn();
    const mockHook = jest.fn(useDebounce);
    test("should call the api after 1000ms after typing", async () => {
      render(<DogBreed />);
      const input = screen.getByPlaceholderText("Search for breeds by name");
      userEvent.type(input, "A");
      expect(mockHook).not.toHaveBeenCalled();
      await waitFor(() => expect(mockHook).toHaveBeenCalledTimes(1), {
        timeout: 1100
      });
      jest.clearAllMocks();
    });
  });
});
