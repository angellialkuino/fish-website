import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import FishCreate from "../app/components/FishCreate";
import { createFishAction } from "../app/components/_actions";

jest.mock("../app/components/_actions", () => ({
  createFishAction: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
    };
  },
}));

window.alert = jest.fn();

describe("FishCreate", () => {
  it("renders FishCreate component correctly", () => {
    const { getByPlaceholderText } = render(<FishCreate />);

    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Class")).toBeInTheDocument();
    expect(getByPlaceholderText("Species")).toBeInTheDocument();
    expect(getByPlaceholderText("Description")).toBeInTheDocument();
    expect(getByPlaceholderText("Photo Link")).toBeInTheDocument();
  });

  it("submits form successfully", async () => {
    const { getByPlaceholderText, getByTestId } = render(<FishCreate />);

    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "FishName" },
    });
    fireEvent.change(getByPlaceholderText("Class"), {
      target: { value: "FishClass" },
    });
    fireEvent.change(getByPlaceholderText("Species"), {
      target: { value: "FishSpecies" },
    });
    fireEvent.change(getByPlaceholderText("Description"), {
      target: { value: "FishDescription" },
    });
    fireEvent.change(getByPlaceholderText("Photo Link"), {
      target: { value: "FishPhotoLink" },
    });

    fireEvent.submit(getByTestId("fish-form1"));

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
