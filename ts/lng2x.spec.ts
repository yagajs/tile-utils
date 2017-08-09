import { expect } from "chai";
import { lng2x } from "./";

describe("lat2y", () => {
    it("should get parse any value in zoom-level 0 to 0", () => {
        expect(lng2x(7, 0)).to.equal(0);
    });
    it("should get the corresponding tile coordinate from a latitude", () => {
        expect(lng2x(7, 18)).to.equal(136169);
    });
});
