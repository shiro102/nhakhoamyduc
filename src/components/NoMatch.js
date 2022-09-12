import React from "react";
import {Link} from "react-router-dom";
function NoMatch() {

    return (
        <>
            <p variant="h2">Page not found, please return to the <Link to="/">home page</Link>.</p>
        </>
    )
};

export default NoMatch;