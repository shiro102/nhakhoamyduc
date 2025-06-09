import React, { memo } from "react";
import "../../App";
import "@aws-amplify/ui-react/styles.css";
import { Translation } from "react-i18next";
import Contact from "./Contact";
import Slider from "./Slider";

const introductionData = [
  {
    id: 1,
    description: "descriptionIntroduction1",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1JLCsSSkUa9T6_dIksI8L3XWu8K0H6gKz&sz=w1000",
    title: "titleIntroduction1",
  },
  {
    id: 2,
    description: "descriptionIntroduction2",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1KZAEFIBNqDXd-HjNB6oLnf6zN6MvCjyj&sz=w1000",
    title: "titleIntroduction2",
  },
];

const Home = () => {
  return (
    <div>
      {/* Slider */}
      <Slider />

      {/* Introduction */}
      <div className="flex flex-col mx-auto justify-center items-center py-10 ">
        {introductionData.map((item) => (
          <div key={item.id}>
            {item.id % 2 === 0 ? (
              <div className="!flex !flex-col-reverse md:!grid md:!grid-cols-[50%_50%] p-4 gap-x-20  justify-center items-center gap-y-10">
                <div className="flex flex-col md:max-w-96 md:justify-self-end  justify-center items-center">
                  <p className="text-2xl font-bold text-[#3f4041]">
                    <Translation>{(t) => t(item.title)}</Translation>
                  </p>
                  <p className="text-lg">
                    <Translation>{(t) => t(item.description)}</Translation>
                  </p>
                </div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-lg object-cover w-[350px] aspect-[4/3]"
                />
              </div>
            ) : (
              <div className="!flex !flex-col md:!grid md:!grid-cols-[50%_50%] p-4 gap-x-20 justify-center items-center gap-y-10">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="md:justify-self-end rounded-lg object-cover w-[350px] aspect-[4/3]"
                />
                <div className="flex flex-col md:max-w-96 justify-center items-center">
                  <p className="text-2xl font-bold pb-2 text-[#3f4041]">
                    <Translation>{(t) => t(item.title)}</Translation>
                  </p>
                  <p className="text-lg">
                    <Translation>{(t) => t(item.description)}</Translation>
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="mx-auto mt-12 w-2/3 border-b border-[#6c7ae0] md:w-1/2"></div>

      {/* Meet our team */}
      <div className="flex flex-col mx-auto justify-center items-center gap-y-10 py-10">
        <h1 className="text-4xl font-bold text-[#3f4041]">
          <Translation>{(t) => t("titleMeetOurDoctors")}</Translation>
        </h1>
        <div className="!flex !flex-col mx-auto justify-center items-center py-10 md:!grid md:!grid-cols-[50%_50%]">
          {/* First Director */}
          <div className="!flex !flex-col justify-center items-center w-full gap-y-3 md:!flex-row md:justify-end md:gap-x-5 md:pr-2">
            <img
              src="https://drive.google.com/thumbnail?id=150ts6Imd6vEJDJIu9BSLaoD9xm-FC_4u&sz=w1000"
              alt="Trong Nguyen"
              width={200}
              height={50}
              className="h-[140px] w-[140px] rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center gap-y-2 md:items-start">
              <span className="header-font-black text-xl font-bold">
                <Translation>{(t) => t("nameDoctor1")}</Translation>
              </span>
              <span className="header-font-black text-sm font-semibold text-textColor-brand">
                <Translation>{(t) => t("titleDoctor1")}</Translation>
              </span>
              <span className="max-w-[300px] text-center text-sm md:!text-left">
                <Translation>{(t) => t("descriptionDoctor1")}</Translation>
              </span>
            </div>
          </div>
          {/* Second Director */}
          <div className="!flex !flex-col justify-center items-center w-full gap-x-5 gap-y-3 md:!flex-row md:justify-start md:pl-4">
            <img
              src="https://drive.google.com/thumbnail?id=14oie7aYFMkMRwPYx9Ngty7B7wx-2NczG&sz=w1000"
              alt="Eattle Nguyen"
              width={200}
              height={50}
              className="h-[140px] w-[140px] rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center gap-y-2 md:items-start">
              <span className="header-font-black text-xl font-bold">
                <Translation>{(t) => t("nameDoctor2")}</Translation>
              </span>
              <span className="header-font-black text-sm font-semibold text-textColor-brand">
                <Translation>{(t) => t("titleDoctor2")}</Translation>
              </span>
              <span className="max-w-[300px] text-center text-sm md:!text-left">
                <Translation>{(t) => t("descriptionDoctor2")}</Translation>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="mx-auto mt-12 w-2/3 border-b border-[#6c7ae0] md:w-1/2"></div>

      {/* Map */}
      <div className="flex flex-col mx-auto justify-center items-center py-10">
        <h1 className="text-4xl font-bold text-[#3f4041]">
          <Translation>{(t) => t("map")}</Translation>
        </h1>
      </div>
      <Contact />

      {/* Back to top */}
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up"></i>
        </span>
      </div>
    </div>
  );
};

export default memo(Home);
