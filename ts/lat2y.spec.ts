import { expect } from "chai";
import { lat2y } from "./";

describe("lat2y", () => {
    it("should get parse any value in zoom-level 0 to 0", () => {
        expect(lat2y(51, 0)).to.equal(0);
    });
    it("should get the corresponding tile coordinate from a latitude", () => {
        expect(lat2y(51, 18)).to.equal(87759);
    });
});
