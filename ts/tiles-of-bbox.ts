import { IBBox } from "./bbox";
import { lat2y } from "./lat2y";
import { lng2x } from "./lng2x";
import { ITileCoordinates } from "./tile-coordinates";

/**
 * List all tile coordinates that covers the given bounding box and range of z.
 */
export function getListOfTilesInBBox(bbox: IBBox, maxZ: number, minZ: number = 0): ITileCoordinates[] {
    const result: ITileCoordinates[] = [];
    for (let z = minZ; z <= maxZ; z += 1) {
        const minX = lng2x(bbox.minLng, z);
        const maxX = lng2x(bbox.maxLng, z);
        const maxY = lat2y(bbox.minLat, z);
        const minY = lat2y(bbox.maxLat, z);
        for (let x = minX; x <= maxX; x += 1) {
            for (let y = minY; y <= maxY; y += 1) {
                result.push({z, x, y});
            }
        }
    }
    return result;
}
