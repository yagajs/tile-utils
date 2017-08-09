import { expect } from "chai";
import { getListOfTilesInBBox } from "./";

describe("getListOfTilesInBBox", () => {
    it("should get one tile for zoom level 0", () => {
        expect(getListOfTilesInBBox({
            maxLat: 51.000705316213136,
            maxLng: 7.000919580459596,
            minLat: 50.99996599121592,
            minLng: 6.99981987476349,
        }, 0)).to.deep.equal([{x: 0, y: 0, z: 0}]);
    });
    it("should set minZ to 0 by default", () => {
        expect(getListOfTilesInBBox({
            maxLat: 51.000705316213136,
            maxLng: 7.000919580459596,
            minLat: 50.99996599121592,
            minLng: 6.99981987476349,
        }, 2)).to.deep.equal([
            {x: 0, y: 0, z: 0},
            {x: 1, y: 0, z: 1},
            {x: 2, y: 1, z: 2},
        ]);
    });
    it("should get two tiles for the rage of the zoom levels 1 to 2", () => {
        expect(getListOfTilesInBBox({
            maxLat: 51.000705316213136,
            maxLng: 7.000919580459596,
            minLat: 50.99996599121592,
            minLng: 6.99981987476349,
        }, 2, 1)).to.deep.equal([
            {x: 1, y: 0, z: 1},
            {x: 2, y: 1, z: 2},
        ]);
    });
    it("should get four tiles for the rage of the zoom level 19", () => {
        expect(getListOfTilesInBBox({
            maxLat: 51.000705316213136,
            maxLng: 7.000919580459596,
            minLat: 50.99996599121592,
            minLng: 6.99981987476349,
        }, 19, 19)).to.deep.equal([
            {x: 272338, y: 175518, z: 19},
            {x: 272338, y: 175519, z: 19},
            {x: 272339, y: 175518, z: 19},
            {x: 272339, y: 175519, z: 19},
        ]);
    });
});
