import React from "react";
import giayphep from "../images/giayphep_1.jpg"
import front1 from "../images/front1.jpg"
import desk1 from "../images/desk1.jpg"
import tramrang1 from "../images/tramrang1.jpg"
import useScript from "../functions/useScript";
import scriptUrlList from "../scripts/scriptUrl";
import scriptTextList from "../scripts/scriptText";
import useLink from "../functions/useLink";


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
        <div>
            <div className="about">
                <p>
                    Với hơn 10 năm kinh nghiệm trong ngành răng hàm mặt, nha khoa Mỹ Đức là một trong những nha khoa tốt nhất
                    ở thành phố Hồ Chí Minh - nơi quý khách có thể tìm thấy những dịch vụ chăm sóc răng miệng tốt nhất với giá cả
                    phải chăng.
                </p>
                <img className= "image-about" src={desk1} alt={"desk1"}/> <br/>
            </div>
            <div className="about reveal">
                <p>
                    Đội ngũ bác sĩ chuyên nghiệp của chúng tôi sẽ đem đến cho quý khách trải nghiệm thoái mái nhất, đồng thời quý khách
                    sẽ được tư vấn và khám bệnh miễn phí để quý khách có thể chọn lựa dịch vụ phù hợp với bản thân nhất.
                </p>
                <img className= "image-about"src={tramrang1} alt={"tramrang1"}/> <br/>
            </div>
            <div className="about reveal">
                <p>
                    Một số hình ảnh về chứng chỉ & phòng khám của chúng tôi
                </p>
                <img className= "image-about" src={front1} alt={"front1"}/> <br/>
                <img className="image-about-2" src={giayphep} alt={"giayphep1"}/>

            </div>

            {/*<img className="img-fluid" src={giayphep} alt={"logo"}/>*/}

        </div>
    )
};

export default About;