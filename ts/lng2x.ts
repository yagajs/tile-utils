/**
 * Transforms a longitude with a z value of a tile coordinate to its corresponding x value of a tile coordinate.
 */
export function lng2x(lng: number, z: number): number {
    return (Math.floor((lng + 180) / 360 * Math.pow(2, z)));
}
