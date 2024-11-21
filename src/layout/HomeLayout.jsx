
import React from "react";
// import Banner from "../components/Banner";
import ImageSlider from "../components/Home/ImageSlider";
import AboutSection from "../components/Home/AboutSection";
import SuccessSection from "../components/Home/SuccessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import FeaturedLesson from "../components/FeaturedLesson";
import { Helmet } from "react-helmet";

export default function HomeLayout() {

  return (
    <div>
      <Helmet>
        <title>Home | Lingo Bingo</title>
      </Helmet>
      <ImageSlider />
      <AboutSection />
      <SuccessSection />
      <TestimonialsSection />
      {/* <Banner /> */}
      <FeaturedLesson />
    </div>
  );
}