import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  screen.getByText("BookingForm");
});

test("Should render", () => {
  render(<initializeTimes />);
})

test("Should create", () =>{
  render(<updateTimes />);
})