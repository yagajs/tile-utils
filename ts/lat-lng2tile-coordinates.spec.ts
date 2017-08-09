import { expect } from "chai";
import { latLng2tileCoordinates } from "./";

describe("latLng2tileCoordinates", () => {
    it("should get parse any value in zoom-level 0 to 0", () => {
        expect(latLng2tileCoordinates({lat: 51, lng: 7}, 0)).to.deep.equal({
            x: 0,
            y: 0,
            z: 0,
        });
    });
    it("should get the corresponding tile coordinate from a latitude", () => {
        expect(latLng2tileCoordinates({lat: 51, lng: 7}, 18)).to.deep.equal({
            x: 136169,
            y: 87759,
            z: 18,
        });
    });
});
