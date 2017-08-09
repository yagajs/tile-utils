/**
 * Interface for coordinates with latitude and longitude
 */
export interface ILatLng {
    lat: number;
    lng: number;
}

/**
 *  * Interface for coordinates with latitude, longitude and altitude
 */
export interface ILatLngAltitude extends ILatLng {
    alt?: number;
}
