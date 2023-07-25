import React from "react";
import HeroSection from "./src/HeroSection";
import { AboutComponent } from "../../components/MoreAbout/MoreAbout";
import {
  ABOUT_PAGE_LIST1,
  ABOUT_PAGE_LIST2,
  ABOUT_PAGE_OVERVIEW,
  ABOUT_PAGE_PARAGRAPHS,
  ABOUT_PAGE_TDO,
  ABOUT_PAGE_VISION,
  ABOUT_US_TEXT,
  PageHeadings,
} from "../../constants/AboutUsConstants";

const AboutPage = () => {
  const AboutRender = ({ Heading, Para, List }) => {
    return [
      <h2 key="heading">{Heading}</h2>,
      Para && <p key="paragraph">{Para}</p>,
      List && (
        <ul>
          {List?.map((item, index) => (
            <li key={index}>
              <i key={item} className="fa-solid fa-check-double" />
              {item}
            </li>
          ))}
        </ul>
      ),
    ];
  };

  return (
    <>
      <HeroSection />
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-left">
              <h2>{ABOUT_US_TEXT}</h2>
            </div>
            <AboutComponent url={"/img/countries/airfares-101_0.webp"}>
              <div
                className="col-lg-6 pt-4 pt-lg-0 aboutUs_text"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {ABOUT_PAGE_PARAGRAPHS.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </AboutComponent>
          </div>
        </section>

        <section className="aboutUs_overviewText">
          <div className="container">
            <AboutRender
              key="overview"
              Heading={PageHeadings.Overview}
              Para={ABOUT_PAGE_OVERVIEW}
            />

            <AboutRender
              key="vision"
              Heading={PageHeadings.Vision}
              Para={ABOUT_PAGE_VISION}
            />

            <AboutRender
              key="coreActivities"
              Heading={PageHeadings.CoreActivities}
              List={ABOUT_PAGE_LIST1}
            />

            <AboutRender
              key="tdo"
              Heading={PageHeadings.TDO}
              Para={ABOUT_PAGE_TDO}
              List={ABOUT_PAGE_LIST2}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
