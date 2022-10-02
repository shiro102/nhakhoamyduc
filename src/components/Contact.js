import React from 'react'
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
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

// const aws = require('aws-sdk');
// aws.config.update({
//     region:'ap-southeast-1'
// });
// // Load the AWS SDK
// var region = "ap-southeast-1",
//     secretName = "GoogleMapApi",
//     secret,
//     decodedBinarySecret;
//
// // Create a Secrets Manager client
// var client = new aws.SecretsManager({
//     region: region
// });
// In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
// See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
// We rethrow the exception by default.

// client.getSecretValue({SecretId: secretName}, function(err, data) {
//     console.log(err, data)
//     if (err) {
//         if (err.code === 'DecryptionFailureException')
//             // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InternalServiceErrorException')
//             // An error occurred on the server side.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InvalidParameterException')
//             // You provided an invalid value for a parameter.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InvalidRequestException')
//             // You provided a parameter value that is not valid for the current state of the resource.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'ResourceNotFoundException')
//             // We can't find the resource that you asked for.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//     }
//     else {
//         // Decrypts secret using the associated KMS key.
//         // Depending on whether the secret is a string or binary, one of these fields will be populated.
//         if ('SecretString' in data) {
//             secret = data.SecretString;
//             secret = JSON.parse(secret);
//         } else {
//             let buff = new Buffer(data.SecretBinary, 'base64');
//             decodedBinarySecret = buff.toString('ascii');
//         }
//     }
//
//     console.log(secret)
//     console.log(decodedBinarySecret)
//
// });


// const { Parameters } = await (new aws.SSM())
//     .getParameters({
//         Names: ["GOOGLE_MAP_API_KEY"].map(secretName => process.env[secretName]),
//         WithDecryption: true,
//     })
//     .promise();
//
// (async () => {
//     await (new aws.SSM())
//         .getParameters({
//             Names: ["GOOGLE_MAP_API_KEY"].map(secretName => process.env[secretName]),
//             WithDecryption: true,
//         })
//         .promise()
// })()

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

    console.log(process.env.secrets)
    console.log(process.env.GOOGLE_MAP_API_KEY)

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