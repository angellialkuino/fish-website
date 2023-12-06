import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AddForm from "../app/components/AddForm";

describe("AddForm Component", () => {
  it("renders AddForm component correctly", () => {
    const { getByText, getByPlaceholderText } = render(<AddForm />);

    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Class")).toBeInTheDocument();
    expect(getByPlaceholderText("Species")).toBeInTheDocument();
    expect(getByPlaceholderText("Description")).toBeInTheDocument();
    expect(getByPlaceholderText("Photo Link")).toBeInTheDocument();
    expect(getByText("Add")).toBeInTheDocument();
  });
});
