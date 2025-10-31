"use client"
import Image from "next/image";
import Header from "./components/Header";
import AnnoucementBar from "./components/AnnoucementBar";
import HeroSlider from "./components/HeroSlider";
import FeaturedCollection from "./components/FeaturedCollection";
import FeaturedProducts from "./components/FeaturedProducts";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";



export default function Home() {

  return (
    <>
    <Header />
    <AnnoucementBar />
    <HeroSlider />
    <FeaturedCollection />
    <FeaturedProducts />
    <Testimonials />
    <Footer />
    </>
  );
}
