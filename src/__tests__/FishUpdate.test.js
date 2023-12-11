import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { updateFishAction } from "../app/components/_actions";
import FishUpdate from "../app/components/FishUpdate";

jest.mock("../app/components/_actions", () => ({
  updateFishAction: jest.fn(),
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

describe("FishUpdate", () => {
  describe("Rendering", () => {
    it("should render UpdateForm component with initial data", () => {
      const fishData = {
        id: 1,
        name: "Fishy",
        class: "Classy",
        species: "Species",
        description: "Description",
        photoLink: "https://example.com/photo.jpg",
      };

      const { getByPlaceholderText } = render(<FishUpdate fish={fishData} />);

      expect(getByPlaceholderText("Name").value).toBe("Fishy");
      expect(getByPlaceholderText("Class").value).toBe("Classy");
      expect(getByPlaceholderText("Species").value).toBe("Species");
      expect(getByPlaceholderText("Description").value).toBe("Description");
      expect(getByPlaceholderText("Photo Link").value).toBe(
        "https://example.com/photo.jpg"
      );
    });
  });

  describe("Form Modification", () => {
    it("should modify the form fields correctly", () => {
      const fishData = {
        id: 1,
        name: "Fishy",
        class: "Classy",
        species: "Species",
        description: "Description",
        photoLink: "https://example.com/photo.jpg",
      };

      const { getByPlaceholderText } = render(<FishUpdate fish={fishData} />);

      fireEvent.change(getByPlaceholderText("Name"), {
        target: { value: "Updated Fishy" },
      });
      fireEvent.change(getByPlaceholderText("Class"), {
        target: { value: "Updated Classy" },
      });
      fireEvent.change(getByPlaceholderText("Species"), {
        target: { value: "Updated Species" },
      });
      fireEvent.change(getByPlaceholderText("Description"), {
        target: { value: "Updated Description" },
      });
      fireEvent.change(getByPlaceholderText("Photo Link"), {
        target: { value: "https://example.com/updated-photo.jpg" },
      });

      expect(getByPlaceholderText("Name").value).toBe("Updated Fishy");
      expect(getByPlaceholderText("Class").value).toBe("Updated Classy");
      expect(getByPlaceholderText("Species").value).toBe("Updated Species");
      expect(getByPlaceholderText("Description").value).toBe(
        "Updated Description"
      );
      expect(getByPlaceholderText("Photo Link").value).toBe(
        "https://example.com/updated-photo.jpg"
      );
    });
  });

  describe("Form Submission", () => {
    it("should trigger the form submission and call updateFishAction with expected arguments", async () => {
      const fishData = {
        id: 1,
        name: "Fishy",
        class: "Classy",
        species: "Species",
        description: "Description",
        photoLink: "https://example.com/photo.jpg",
      };

      const { getByPlaceholderText, getByTestId } = render(
        <FishUpdate fish={fishData} />
      );

      fireEvent.change(getByPlaceholderText("Name"), {
        target: { value: "Updated Fishy" },
      });
      fireEvent.change(getByPlaceholderText("Class"), {
        target: { value: "Updated Classy" },
      });
      fireEvent.change(getByPlaceholderText("Species"), {
        target: { value: "Updated Species" },
      });
      fireEvent.change(getByPlaceholderText("Description"), {
        target: { value: "Updated Description" },
      });
      fireEvent.change(getByPlaceholderText("Photo Link"), {
        target: { value: "https://example.com/updated-photo.jpg" },
      });

      fireEvent.click(getByTestId("fish-form2"));

      await waitFor(() =>
        expect(updateFishAction).toHaveBeenCalledWith(1, {
          name: "Updated Fishy",
          class: "Updated Classy",
          species: "Updated Species",
          description: "Updated Description",
          photoLink: "https://example.com/updated-photo.jpg",
        })
      );
    });
  });
});
