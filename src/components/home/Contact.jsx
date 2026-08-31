import React from 'react'
import useScript from "../../functions/useScript";
import scriptUrlList from "../../scripts/scriptUrl";
import scriptTextList from "../../scripts/scriptText";
import useLink from "../../functions/useLink";
import { Translation } from "react-i18next";

const Contact = () => {
    useScript(scriptUrlList, scriptTextList)
    useLink("css/util.css", "app")

    const location = "Nha Khoa My Duc, 204 Phan Van Tri, Phu Nhuan, Ho Chi Minh City" // lat,lng coordinates

    return (
        <div style={{position: 'relative'}}>
            <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=${location}`}
                title="Dental Clinic Location"
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="box-shadow !bg-white dark:!bg-[#222] text-black dark:text-white">
                <Translation>{t =>
                    <h3 className="stext-301">
                        {t('contact')}
                    </h3>}
                </Translation>

                <p className="stext-118">
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
    )
}

export default React.memo(Contact)