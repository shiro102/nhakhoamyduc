import React from "react";
import banggia from "../images/banggia2.jpg"
import useScript from "../functions/useScript";
import scriptUrlList from "../scripts/scriptUrl";
import scriptTextList from "../scripts/scriptText";
import useLink from "../functions/useLink";

const Pricing = () => {

    useScript(scriptUrlList, scriptTextList)
    useLink("css/util.css", "app")

    return (
        <div>
            <img className="img-fluid" src={banggia} alt={"logo"}/>

        </div>
    )
};

export default Pricing;