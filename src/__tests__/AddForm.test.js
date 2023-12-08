import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import AddForm from "../app/components/AddForm";
import { createFishAction } from "../app/components/_actions";

jest.mock("../app/components/_actions", () => ({
  createFishAction: jest.fn(),
}));

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

  it("submits form successfully", async () => {
    const { getByText, getByPlaceholderText } = render(<AddForm />);

    fireEvent.change(getByPlaceholderText("Name"), { target: { value: "FishName" } });
    fireEvent.change(getByPlaceholderText("Class"), { target: { value: "FishClass" } });
    fireEvent.change(getByPlaceholderText("Species"), { target: { value: "FishSpecies" } });
    fireEvent.change(getByPlaceholderText("Description"), { target: { value: "FishDescription" } });
    fireEvent.change(getByPlaceholderText("Photo Link"), { target: { value: "FishPhotoLink" } });

    fireEvent.submit(getByText("Add"));

    await Promise.resolve();

    expect(createFishAction).toHaveBeenCalledWith({
      name: "FishName",
      class: "FishClass",
      species: "FishSpecies",
      description: "FishDescription",
      photoLink: "FishPhotoLink",
    });
  });
});
