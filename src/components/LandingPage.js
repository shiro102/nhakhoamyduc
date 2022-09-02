import {Route} from "react-router-dom";
import React from "react";

function LandingPage() {
    // let history = matchRoutes(routes);
    // console.log(history)
    React.useEffect(() => {
        window.location.replace('landingpage.html')
    }, [])

    return (
        <div>
        </div>
    );
}

export default LandingPage;