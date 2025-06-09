import React, { memo } from "react";
import { Translation } from "react-i18next";
import useScript from "../../functions/useScript";
import useLink from "../../functions/useLink";
import scriptTextList from "../../scripts/scriptText";
import scriptUrlList from "../../scripts/scriptUrl";

// Memoized slider item component
const SliderItem = memo(
  ({ backgroundImage, mobileBackgroundImage, sloganKey, animationType }) => (
    <div
      className="item-slick1 responsive-bg"
      style={{
        '--desktop-bg': `url(${backgroundImage})`,
        '--mobile-bg': `url(${mobileBackgroundImage})`
      }}
    >
      <div className="h-full">
        <div className="pt-[35vh] md:pt-[45vh] h-full lg:pl-[130px] md:pl-[50px] sm:pl-[35px] pl-[20px]">
          <div
            className="layer-slick1 animated visible-false"
            data-appear={animationType}
            data-delay="0"
          >
            <Translation>
              {(t) => (
                <span
                  className="leading-[1.1] uppercase md:text-[50px] text-[30px] text-[#162F2E]"
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  {t(sloganKey)}
                </span>
              )}
            </Translation>
          </div>
        </div>
      </div>
    </div>
  )
);

SliderItem.displayName = "SliderItem";

const Slider = () => {
  const sliderItems = [
    {
      backgroundImage: "/images/dentist-3.jpg",
      mobileBackgroundImage: "/images/dentist-2-1.png",
      sloganKey: "slogan1",
      animationType: "rollIn",
    },
    {
      backgroundImage: "/images/items.jpg",
      mobileBackgroundImage: "/images/dental-care2.jpg",
      sloganKey: "slogan2",
      animationType: "fadeInDown",
    },
    {
      backgroundImage: "/images/patient.jpg",
      mobileBackgroundImage: "/images/patient.jpg",
      sloganKey: "slogan3",
      animationType: "rotateInDownLeft",
    },
  ];
  useScript(scriptUrlList, scriptTextList);
  useLink("css/util.css", "app");

  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <div className="slick1">
          {sliderItems.map((item, index) => (
            <SliderItem
              key={index}
              backgroundImage={item.backgroundImage}
              mobileBackgroundImage={item.mobileBackgroundImage}
              sloganKey={item.sloganKey}
              animationType={item.animationType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Slider);
