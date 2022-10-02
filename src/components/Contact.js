import React from 'react'
import {GoogleMap, useJsApiLoader, Marker, InfoBox} from '@react-google-maps/api';
import useScript from "../functions/useScript";
import scriptUrlList from "../scripts/scriptUrl";
import scriptTextList from "../scripts/scriptText";
import useLink from "../functions/useLink";

const containerStyle = {
    width: '100%',
    height: '550px'
};

const center = {
    lat: 10.8361318,
    lng: 106.66479980
};

const Contact = () => {

    useScript(scriptUrlList, scriptTextList)
    useLink("css/util.css", "app")

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY
    })

    const options = {
        streetViewControl: true,
        fullscreenControl: true,
    };

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        map.setZoom(20)
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div style={{position: 'relative'}}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                options={options}
                center={center}
                zoom={18}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker
                    position={center}
                />
            </GoogleMap>
            <div className={"box-shadow"}>
                <h3 className="stext-301 cl5" style={{fontSize: "1.5em"}}>
                    Thông tin liên lạc
                </h3>

                <p className="stext-118 cl5" style={{fontSize: "1em"}}>
                    204 Thống Nhất, Phường 11, quận Gò Vấp, thành phố Hồ Chí Minh <br/>
                    Số điện thoại: 0913895695 <br/>
                    Email: nhakhoamyduchcm@gmail.com
                </p>

            </div>
        </div>
    ) : <></>
}

export default React.memo(Contact)