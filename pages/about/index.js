import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import About from "../../components/about2";
import ProjectSection from "../../components/Projects";
import ServiceSection from "../../components/Services";
import FunFact from "../../components/FunFact/FunFact";
import TeamSection from "../../components/TeamSection";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/km-logo.png";
import abimg from "/public/images/about.jpg";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={"Về chúng tôi"} pagesub={"Giới thiệu"} />
      <About abimg={abimg} />
      <ProjectSection />
      <ServiceSection />
      <FunFact fnClass={"wpo-fun-fact-section-s2"} />
      <TeamSection />
      <Testimonial />
      <Footer ftClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
