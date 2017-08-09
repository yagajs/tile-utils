import { expect } from "chai";
import { harmonizeBBox } from "./";

describe("bbox", () => {
    describe("harmonizeBBox", () => {
        it("should keep a right formatted bbox", () => {
            expect(harmonizeBBox({
                maxLat: 5,
                maxLng: 5,
                minLat: 1,
                minLng: 1,
            })).to.deep.equal({
                maxLat: 5,
                maxLng: 5,
                minLat: 1,
                minLng: 1,
            });
        });
        it("should change wrong formatted latitude in bbox", () => {
            expect(harmonizeBBox({
                maxLat: 1,
                maxLng: 5,
                minLat: 5,
                minLng: 1,
            })).to.deep.equal({
                maxLat: 5,
                maxLng: 5,
                minLat: 1,
                minLng: 1,
            });
        });
        it("should change wrong formatted longitude in bbox", () => {
            expect(harmonizeBBox({
                maxLat: 5,
                maxLng: 1,
                minLat: 1,
                minLng: 5,
            })).to.deep.equal({
                maxLat: 5,
                maxLng: 5,
                minLat: 1,
                minLng: 1,
            });
        });
        it("should change completely wrong formatted bbox", () => {
            expect(harmonizeBBox({
                maxLat: 1,
                maxLng: 1,
                minLat: 5,
                minLng: 5,
            })).to.deep.equal({
                maxLat: 5,
                maxLng: 5,
                minLat: 1,
                minLng: 1,
            });
        });
    });
});
