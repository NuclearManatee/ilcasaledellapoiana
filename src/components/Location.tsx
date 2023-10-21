import type { Geo } from "../types"
import { Marker, MapContainer, TileLayer } from "react-leaflet"; // eslint-disable-line import/no-webpack-loader-syntax


interface Props {
    coordinates : Geo
}

export default function Location( {coordinates} : Props ){

    return(<>
        <MapContainer
         center={[coordinates.lat, coordinates.lon]} zoom={12} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[coordinates.lat, coordinates.lon]} />
        </MapContainer>
    </>)
}