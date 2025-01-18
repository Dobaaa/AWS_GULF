import React from "react";
import Nav from "../../components/Nav/Nav";
import Logo from "../../assets/logo.png";
import "./Home.css";
import BrandsSection from "./BrandsSection/BrandsSection";
import About from "./About/About";
import OurServices from "./OurServices/OurServices";
const Home = () => {
  return (
    <div>
      <Nav />
      {/* first section Landing Area */}
      <div className="landing ">
        <div className="container grid grid-cols-12 gap-4 items-center p-8">
          <div className="land-img  col-span-12 md:col-span-8 p-4 flex flex-col items-center">
            <img src={Logo} alt="" className="w-[282px] h-[273px]" />
            <div className="land-btn flex gap-12">
              <button>Marketing Solutions</button>
              <button>Software Solutions</button>
            </div>
          </div>
          <div className="land-txt col-span-12 md:col-span-4 p-4 text-center md:text-end pe-6">
            <h1 className="text-[25px]  lg:text-[35px] xl:text-[47px] text-[var(--main-color)] mb-4 whitespace-nowrap">
              دليلك نحو المستقبل
            </h1>
            <p className="text-gray-300 mb-24">
              استشارات التسويق، تصميم واجهات المستخدم وتجربة المستخدم للمواقع
              تطبيقات الهواتف البرمجية، الإعلانات المدفوعة إنشاء المحتوى،
              التصميم الجرافيكي، الذكاء الاصطناعي وإنتاج الفيديو.
            </p>
            <button className="custom-btn">اتصل بنا الأن</button>
            <div className="socail-media flex justify-center md:justify-end gap-3 mt-3">
              <i className="fa-brands fa-behance text-[24px] text-[var(--main-color)]"></i>
              <i className="fa-brands fa-instagram text-[24px] text-[var(--main-color)]"></i>
              <i className="fa-brands fa-linkedin text-[24px] text-[var(--main-color)]"></i>
              <i className="fa-brands fa-youtube text-[24px] text-[var(--main-color)]"></i>
              <i className="fa-brands fa-facebook text-[24px] text-[var(--main-color)]"></i>
              <i className="fa-brands fa-snapchat text-[24px] text-[var(--main-color)]"></i>
              <i className="fa-brands fa-x-twitter text-[24px] text-[var(--main-color)]"></i>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* brand section  */}
      <BrandsSection />
      {/* seconed section About Area */}
      <About />
      {/* Third section services  Area */}
      <OurServices />
    </div>
  );
};

export default Home;
