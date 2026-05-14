"use client";

import NewsLetter from "@/components/pages/landing/newsLetter";
import UpdateBar from "@/components/pages/landing/UpdateBar";
import Testimonials from "@/components/pages/landing/testimonials";
import Services from "./services/page";
import Slider from "@/components/pages/Slider";
import Contact from "./contact/page";
import OurClients from "@/components/pages/landing/ourClients";
import AboutUsSection from "@/components/pages/about/about";
import SliderCard from "@/components/pages/landing/SliderCard";

export default function Home() {
  return (
    <>
      <Slider />
      <SliderCard/>
      <UpdateBar />
      <AboutUsSection/>
      <Services limit={6} />
      <Testimonials />
      <OurClients/>
      <NewsLetter />
      <Contact/>
    </>

  );
}
