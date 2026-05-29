import React, { memo } from 'react';
import { Translation } from "react-i18next";

// Reusable components
const FooterSection = memo(({ title, children }) => (
  <div className="col-sm-6 col-lg-3 md:pb-[50px] pb-[20px]">
    <Translation>
      {t => <h4 className="stext-301 cl0 md:pb-[20px] pb-[10px]">{t(title)}</h4>}
    </Translation>
    {children}
  </div>
));

const FooterLink = memo(({ translationKey }) => (
  <li className="p-b-10">
    <Translation>
      {t => (
        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
          {t(translationKey)}
        </a>
      )}
    </Translation>
  </li>
));

const SocialLink = memo(({ icon, href }) => (
  <a href={href} className="fs-18 cl7 hov-cl1 trans-04 m-r-16" aria-label={`Visit our ${icon} page`} rel="noopener noreferrer" target="_blank">
    <i className={`fa fa-${icon}`}></i>
  </a>
));

const WorkingHoursTable = memo(() => {
  const days = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
  const shifts = ['shift1', 'shift2', 'shift3'];
  
  return (
    <div>
      <table style={{borderCollapse: "separate", borderSpacing:"1em 0em"}} aria-label="Working Hours">
        <tbody>
          <tr>
            <th className="stext-107 cl7 hov-cl1 trans-04"></th>
            {shifts.slice(0, 2).map(shift => (
              <Translation key={shift}>
                {t => <th className="stext-107 cl7 hov-cl1 trans-04">{t(shift)}</th>}
              </Translation>
            ))}
          </tr>
          {days.map((day, index) => (
            <tr key={day}>
              <Translation>
                {t => <td className="stext-107 cl7 hov-cl1 trans-04">{t(day)}</td>}
              </Translation>
              <td className="stext-107 cl7 hov-cl1 trans-04">
                {index === 6 ? '8:00 – 11:00' : '8:00 – 12:00'}
              </td>
              <td className="stext-107 cl7 hov-cl1 trans-04">
                {index === 6 ? (
                  <Translation>
                    {t => t('shift3')}
                  </Translation>
                ) : '14:00 – 20:00'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

const Footer = () => {
  const mainServices = ['mainService1', 'mainService2', 'mainService3', 'mainService4'];
  const socialLinks = [
    { icon: 'facebook', href: 'https://www.facebook.com/people/Nha-Khoa-M%E1%BB%B9-%C4%90%E1%BB%A9c-G%C3%B2-V%E1%BA%A5p/61577458193223' },
    { icon: 'instagram', href: 'https://www.instagram.com/nhakhoamyducgovap' },
  ];

  return (
    <footer className="bg3 pt-5 pb-2 mx-auto" role="contentinfo">
      <div className="container">
        <div className="row">
          <FooterSection title="mainService">
            <ul>
              {mainServices.map(service => (
                <FooterLink key={service} translationKey={service} />
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="workingTime1">
            <WorkingHoursTable />
          </FooterSection>

          <FooterSection title="address">
            <Translation>
              {t => (
                <p className="stext-107 cl7 size-201">
                  {t('realAddress')}
                </p>
              )}
            </Translation>
          </FooterSection>

          <FooterSection title="contact">
            <p className="stext-107 cl7 size-201">
              <Translation>
                {t => (
                  <>
                    <span>{t('phoneNum1')}</span><br/>
                    <span>{t('phoneNum2')}</span><br/>
                    <span>{t('email')}</span><br/>
                  </>
                )}
              </Translation>
            </p>

            <div className="p-t-27">
              {socialLinks.map(link => (
                <SocialLink key={link.icon} {...link} />
              ))}
            </div>
          </FooterSection>
        </div>

        <div>
          <p className="stext-107 cl6 txt-center">
            <Translation>
              {t => <span>{t('name')} </span>}
            </Translation>
            &copy; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// Add display names for debugging
FooterSection.displayName = 'FooterSection';
FooterLink.displayName = 'FooterLink';
SocialLink.displayName = 'SocialLink';
WorkingHoursTable.displayName = 'WorkingHoursTable';

export default memo(Footer);