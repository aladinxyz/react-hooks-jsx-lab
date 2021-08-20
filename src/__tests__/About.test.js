import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { image } from "../data/data";
import About from "../components/About";

test("renders a <div> with the correct ID", () => {
  const { container } = render(<About />);
  expect(container.querySelector("#about")).toBeInTheDocument();
});

test("renders a <div> with three children", () => {
  const { container } = render(<About />);
  expect(container.querySelector("#about").children).toHaveLength(3);
});

test("renders a <h2> with the text 'About Me'", () => {
  const { container } = render(<About />);
  const h2 = container.querySelector("h2");
  expect(h2.textContent).toEqual("About Me");
});

test("renders a <p> element", () => {
  const { container } = render(<About />);
  expect(container.querySelector("p")).toBeInTheDocument();
});

test("renders a <img> element with the correct attributes", () => {
  render(<About />);
  const img = screen.queryByAltText("I made this");
  expect(img).toBeInTheDocument();
  expect(img.src).toEqual(image);
});
