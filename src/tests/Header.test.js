import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";

test("Header render", () => {
  render(<Header />);
  const headerValue = screen.getByText("Emoji Search");
  expect(headerValue).toBeInTheDocument;
});
