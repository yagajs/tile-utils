import * as turfBbox from "@turf/bbox";
import { Feature, FeatureCollection } from "geojson";

import { IBBox } from "./bbox";
import { lat2y } from "./lat2y";
import { lng2x } from "./lng2x";
import { ITileCoordinates } from "./tile-coordinates";

/**
 * Get the biggest z value of a possible tile that covers a bounding box according the the given maximal z value.
 */
export function getCoveringZFromBBox(bbox: IBBox, maxZ: number): number {
    const width = Math.abs(lng2x(bbox.minLng, maxZ) - lng2x(bbox.maxLng, maxZ));
    if (width !== 0) {
        return getCoveringZFromBBox(bbox, maxZ - Math.ceil(Math.log(width) / Math.log(2)));
    }

    const height = Math.abs(lat2y(bbox.minLat, maxZ) - lat2y(bbox.maxLat, maxZ));
    if (height !== 0) {
        return getCoveringZFromBBox(bbox, maxZ - Math.ceil(Math.log(height) / Math.log(2)));
    }
    return maxZ;
}

/**
 * Get the tile coordinates that covers the given bbox and maximal z value.
 */
export function getCoveringTileFromBBox(bbox: IBBox, maxZ: number): ITileCoordinates {
    const z = getCoveringZFromBBox(bbox, maxZ);

    return {
        x: lng2x(bbox.minLng, z),
        y: lat2y(bbox.minLat, z),
        z,
    };
}
/**
 * Get the tile coordinates that covers the given GeoJSON and maximal z value.
 */
export function getCoveringTileFromGeoJSON(
    geoJSON: Feature<any> | FeatureCollection<any>, maxZ: number,
): ITileCoordinates {
    const [minLng, minLat, maxLng, maxLat] = turfBbox(geoJSON);
    return getCoveringTileFromBBox({minLng, minLat, maxLng, maxLat}, maxZ);
}
