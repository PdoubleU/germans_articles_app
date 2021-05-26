import { render, screen } from "@testing-library/react";
import App from "./Root";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/this is root/i);
  expect(linkElement).toBeInTheDocument();
});
