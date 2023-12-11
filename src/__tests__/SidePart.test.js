import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SidePart from "../app/components/SidePart";

describe("SidePart", () => {
  describe("Rendering", () => {
    it("should render text", () => {
      const { getByText } = render(<SidePart description="test" />);
      expect(getByText("Fish")).toBeInTheDocument();
      expect(getByText("test")).toBeInTheDocument();
    });

    it("should render the buttons", () => {
      const wrapper = render(<SidePart description="test" />);
      const links = wrapper.getAllByRole("link");
      expect(links[0].href).toContain("/");
      expect(links[1].href).toContain("/create");
    });
  });
});
