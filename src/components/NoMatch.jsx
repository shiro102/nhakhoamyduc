import React from "react";
import {Link} from "react-router-dom";

const NoMatch = () => {

    return (
        <div>
            <p variant="h1">Page not found, please return to the <Link to="/">home page</Link>.</p>
        </div>
    )
};

export default NoMatch;