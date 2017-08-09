import { expect } from "chai";
import { getCoveringTileFromBBox, getCoveringTileFromGeoJSON, getCoveringZFromBBox } from "./";

describe("covering-tile", () => {
    describe("getCoveringZFromBBox", () => {
        it("should get zoom level 18 with this bbox", () => {
            expect(getCoveringZFromBBox({
                maxLat: 51.000705316213136,
                maxLng: 7.000919580459596,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 20)).to.equal(18);
        });
        it("should get zoom level 18 even with the same longitude", () => {
            expect(getCoveringZFromBBox({
                maxLat: 51.000705316213136,
                maxLng: 6.99981987476349,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 20)).to.equal(18);
        });
        it("should get zoom level 18 even with the same latitude", () => {
            expect(getCoveringZFromBBox({
                maxLat: 50.99996599121592,
                maxLng: 7.000919580459596,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 20)).to.equal(18);
        });
        it("should get zoom level 18 even if 18 is max", () => {
            expect(getCoveringZFromBBox({
                maxLat: 51.000705316213136,
                maxLng: 7.000919580459596,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 18)).to.equal(18);
        });
        it("should get zoom level 15 when 15 is max", () => {
            expect(getCoveringZFromBBox({
                maxLat: 51.000705316213136,
                maxLng: 7.000919580459596,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 15)).to.equal(15);
        });
    });
    describe("getCoveringTileFromBBox", () => {
        it("should get zoom level 18 with this bbox", () => {
            expect(getCoveringTileFromBBox({
                maxLat: 51.000705316213136,
                maxLng: 7.000919580459596,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 20)).to.deep.equal({
                x: 136169,
                y: 87759,
                z: 18,
            });
        });
        it("should get zoom level 18 even if 18 is max", () => {
            expect(getCoveringTileFromBBox({
                maxLat: 51.000705316213136,
                maxLng: 7.000919580459596,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 18)).to.deep.equal({
                x: 136169,
                y: 87759,
                z: 18,
            });
        });
        it("should get zoom level 15 when 15 is max", () => {
            expect(getCoveringTileFromBBox({
                maxLat: 51.000705316213136,
                maxLng: 7.000919580459596,
                minLat: 50.99996599121592,
                minLng: 6.99981987476349,
            }, 15)).to.deep.equal({
                x: 17021,
                y: 10969,
                z: 15,
            });
        });
    });
    describe("getCoveringTileFromGeoJSON", () => {
        it("should get zoom level 18 with this geoJSON", () => {
            expect(getCoveringTileFromGeoJSON({
                geometry: {
                    coordinates: [
                        [
                            [6.99981987476349, 50.99996599121592],
                            [6.99981987476349, 51.000705316213136],
                            [7.000919580459596, 51.000705316213136],
                            [6.99981987476349, 50.99996599121592],
                        ],
                    ],
                    type: "Polygon",
                },
                properties: {},
                type: "Feature",
            }, 20)).to.deep.equal({
                x: 136169,
                y: 87759,
                z: 18,
            });
        });
    });
});
