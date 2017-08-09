/**
 * Transforms a latitude with a z value of a tile coordinate to its corresponding y value of a tile coordinate.
 */
export function lat2y(lat: number, z: number): number {
    return (Math.floor(
        (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) /
        2 * Math.pow(2, z),
    ));
}
