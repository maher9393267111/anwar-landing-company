import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Featured from "./components/Featured";
import AfterFeatured from "./components/AfterFeatured";
import Departments from "./components/Departments";
import DescriptionAndImage from "./components/DescriptionAndImage";
import ImageAndDescription from "./components/ImageAndDescription";
import CompanySales from "./components/CompanySales";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="xl:px-6">
          <div className="mt-5 mb-40">
            <HeroSection />

<div className=" mt-24">
<Featured />
</div>

          


          </div>
          {/* <Featured /> */}
        </div>
      </div>

      <AfterFeatured />
      <div className="container">
        <div className="xl:px-6">
          <div className="my-32">
            <Departments />
          </div>
        </div>
      </div>

      <div className="py-12 bg-primaryColor-400">
        <div className="container">
          <div className="xl:px-6">
            <CompanySales />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="xl:px-6">
          <div className="my-32">
            <DescriptionAndImage />
          </div>
        </div>
      </div>

      <div className="pt-32 pb-8 bg-secondaryBg">
        <div className="container">
          <div className="xl:px-6">
            <ImageAndDescription />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
