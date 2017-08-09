/**
 * Interface of a bounding box
 */
export interface IBBox {
    /**
     * maximum latitude
     */
    maxLat: number;
    /**
     * maximum longitude
     */
    maxLng: number;
    /**
     * minimum latitude
     */
    minLat: number;
    /**
     * minimum longitude
     */
    minLng: number;
}

/**
 * Fulfill the minimum and maximum values to be at the right place...
 */
export function harmonizeBBox(bbox: IBBox): IBBox {
    return {
        maxLat: bbox.maxLat >= bbox.minLat ? bbox.maxLat : bbox.minLat,
        maxLng: bbox.maxLng >= bbox.minLng ? bbox.maxLng : bbox.minLng,
        minLat: bbox.minLat <= bbox.maxLat ? bbox.minLat : bbox.maxLat,
        minLng: bbox.minLng <= bbox.maxLng ? bbox.minLng : bbox.maxLng,
    };
}
