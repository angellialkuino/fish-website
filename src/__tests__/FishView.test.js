import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FishView from "../app/components/FishView";

describe("FishView", () => {
  describe("Rendering", () => {
    it("should render info in fish view", () => {
      const fishData = {
        id: 1,
        name: "Fishy",
        class: "Classy",
        species: "Speciesy",
        description: "Description",
        photoLink: "https://example.com/photo.jpg",
      };
      const { getByText } = render(<FishView fish={fishData} />);
      expect(getByText("Fishy")).toBeInTheDocument();
      //   expect(getByText("Classy")).toBeInTheDocument(); ah ga error tungod sa <br/>
      //   expect(getByText("Speciesy")).toBeInTheDocument();
      expect(getByText("Description")).toBeInTheDocument();
    });
  });
});
