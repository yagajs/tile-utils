import { lat2y } from "./lat2y";
import { ILatLng } from "./latlng";
import { lng2x } from "./lng2x";
import { ITileCoordinates } from "./tile-coordinates";

/**
 * Transforms latitude and longitude with a z value of a tile coordinate to its corresponding tile coordinate.
 */
export function latLng2tileCoordinates(latLng: ILatLng, z: number): ITileCoordinates {
    return {
        x: lng2x(latLng.lng, z),
        y: lat2y(latLng.lat, z),
        z,
    };
}
