import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FishCard from "../app/components/FishCard";

describe("FishCard", () => {
  describe("Rendering", () => {
    it("should render info in fish card", () => {
      const fishData = {
        id: 1,
        name: "Fishy",
        photoLink: "https://example.com/photo.jpg",
      };
      const { getByText } = render(<FishCard fish={fishData} />);
      expect(getByText("Fishy")).toBeInTheDocument();
    });

    it("should render the button links", () => {
      const fishData = {
        id: 1,
        name: "Fishy",
        photoLink: "https://example.com/photo.jpg",
      };

      const wrapper = render(<FishCard fish={fishData} />);
      const links = wrapper.getAllByRole("link");
      expect(links[0].href).toContain("/fishes/1");
      expect(links[1].href).toContain("/update/1");
    });
  });
});
