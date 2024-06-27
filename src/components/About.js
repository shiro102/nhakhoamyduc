import React from "react";
import nhanhieu1 from "../images/nhanhieu_1.jpg"
import nhanhieu2 from "../images/nhanhieu_2.jpg"
import front1 from "../images/front1.jpg"
import desk1 from "../images/desk1.jpg"
import tramrang1 from "../images/tramrang1.jpg"
import useScript from "../functions/useScript";
import scriptUrlList from "../scripts/scriptUrl";
import scriptTextList from "../scripts/scriptText";
import useLink from "../functions/useLink";
import { Translation } from "react-i18next";


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const About = () => {

    useScript(scriptUrlList, scriptTextList)
    useLink("css/util.css", "app")

    return (
        <div style={{fontFamily: 'Times New Roman'}}>
            <div className="about">
                <Translation>{t =>
                    <p>
                        {t('description1')}
                    </p>}
                </Translation> 
                <img className= "image-about" src={desk1} alt={"desk1"}/> <br/>
            </div>
            <div className="about reveal">
                <Translation>{t =>
                    <p>
                        {t('description2')}
                    </p>}
                </Translation> 
                <img className= "image-about"src={tramrang1} alt={"tramrang1"}/> <br/>
            </div>
            <div className="about reveal row">
                <Translation>{t =>
                    <p>
                        {t('description3')}    
                    </p>}
                </Translation> 
                <div class="column">
                    <img className= "image-about-2" src={nhanhieu1} alt={"nhanhieu1"}/> <br/>
                </div>
                <div class="column">
                    <img className="image-about-2" src={nhanhieu2} alt={"nhanhieu2"}/>
                </div>
            </div>
            <div className="about" style={{textAlign: "center", paddingBottom: "2em", fontStyle: "italic", fontWeight: "bold", fontSize: "1.5em", color: "#0000FF"}}>
                <Translation>{t =>
                    <p>
                        {t('motto')} 
                    </p>}
                </Translation> 
            </div>
            {/*<img className="img-fluid" src={giayphep} alt={"logo"}/>*/}

        </div>
    )
};

export default About;