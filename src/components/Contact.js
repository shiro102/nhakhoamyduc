import React from 'react'
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import useScript from "../functions/useScript";
import scriptUrlList from "../scripts/scriptUrl";
import scriptTextList from "../scripts/scriptText";
import useLink from "../functions/useLink";
import { Translation } from "react-i18next";

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
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
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
                <Translation>{t =>
                    <h3 className="stext-301 cl5">
                        {t('contact')}
                    </h3>}
                </Translation>

                <p className="stext-118 cl5">
                    <Translation>{t =>
                    <span> {t('phoneNum1')}</span>}
                    </Translation> <br/>
                    <Translation>{t =>
                    <span> {t('phoneNum2')}</span>}
                    </Translation> <br/>
                    <Translation>{t =>
                    <span> {t('email')}</span>}
                    </Translation> <br/>
                </p>

            </div>
        </div>
    ) : <></>
}

export default React.memo(Contact)