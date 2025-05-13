import { render, screen } from "@testing-library/react";
import { Hello } from "./3.hello";

describe("Hello", () => {
  test("should render correctly", () => {
    // Arrange
    render(<Hello />);
    // Act
    const element = screen.getByText("Hello World");
    // Assert
    expect(element).toBeInTheDocument();
  });
});
