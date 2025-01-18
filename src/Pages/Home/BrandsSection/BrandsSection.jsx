import React from "react";
import microSoftImg from "../../../assets/Microsoft-Logo.png";
import LenovoImg from "../../../assets/png-clipart-laptop-lenovo-logo-inteconnex-computer-software-lenovo-logo-electronics-company.png";
import KasperskyImg from "../../../assets/Kaspersky_logo.svg.png";
import peplinkImg from "../../../assets/peplink-logo-png_seeklogo-392790.png";
import DellImg from "../../../assets/png-clipart-dell-laptop-logo-brand-printer-software-branding-blue-angle.png";
import CiscoImg from "../../../assets/images.png";

import "./BrandSection.css";

const BrandsSection = () => {
  return (
    <div className="brands overflow-hidden py-6 flex items-center  justify-evenly">
      <div className="relative overflow-hidden flex justify-evenly">
        <div className="flex items-center animate-scroll">
          <img src={microSoftImg} alt="Microsoft" className="h-12" />
          <img src={KasperskyImg} alt="Kaspersky" className="h-12" />
          <img src={DellImg} alt="Microsoft" className="h-12" />
          <img src={LenovoImg} alt="Kaspersky" className="h-12" />
          <img src={peplinkImg} alt="Kaspersky" className="h-12" />
          <img src={CiscoImg} alt="Kaspersky" className="h-12" />
        </div>
      </div>
      <h3 className="brand-txt text-xl font-semibold ">
        شراكاتنا مع العلامات التجارية الرائدة
      </h3>
    </div>
  );
};

export default BrandsSection;
