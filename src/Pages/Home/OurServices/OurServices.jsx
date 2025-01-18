import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OurServices.css";
import { Navigation, Pagination, History } from "swiper/modules";
import { Link } from "react-router";
import ServiceImg from "../../../assets/service2.jpeg";
import ServiceImgTwo from "../../../assets/service.jpeg";
import ServiceImgThree from "../../../assets/service3.jpg";

const OurServices = () => {
  return (
    <div className="p-12">
      <h1></h1>
      <Swiper
        spaceBetween={50} // المسافة الافتراضية بين الشرائح
        slidesPerView={3} // الافتراضي هو 3 شرائح للشاشات الكبيرة
        navigation={true}
        pagination={{ clickable: true }}
        history={{
          key: "slide",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // شريحة واحدة للشاشات الصغيرة جدًا (<640px)
            spaceBetween: 10, // تقليل المسافة
          },
          640: {
            slidesPerView: 2, // شريحتان للشاشات المتوسطة (640px - 768px)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 شرائح للشاشات الكبيرة (>1024px)
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="1">
          <div className="card">
            <img src={ServiceImg} alt="" />
            <h3>تصميم يركز على المستخدم</h3>
            <p>في سعينا لنجاح منتجاتك، نصمم تجربة مستخدم مميزة وجذابة</p>
            <Link to="/" className="service-link">
              <i
                class="fa-solid fa-arrow-down fa-rotate-by icon"
                style={{ "--fa-rotate-angle": "115deg" }}
              ></i>
              <span>اعرف المزيد</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="Slide 2">
          {" "}
          <div className="card">
            <img src={ServiceImgTwo} alt="" />
            <h3>تطوير تطبيقات الجوال</h3>
            <p> نقدم تطبيقات جوال مميزة تلبي احتياجاتك بأحدث التقنيات </p>
            <Link to="/" className="service-link">
              <i
                class="fa-solid fa-arrow-down fa-rotate-by icon"
                style={{ "--fa-rotate-angle": "115deg" }}
              ></i>
              <span>اعرف المزيد</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="3">
          <div className="card">
            <img src={ServiceImgThree} alt="" />
            <h3>تصميم يركز على المستخدم</h3>
            <p>في سعينا لنجاح منتجاتك، نصمم تجربة مستخدم مميزة وجذابة</p>
            <Link to="/" className="service-link">
              <i
                class="fa-solid fa-arrow-down fa-rotate-by icon"
                style={{ "--fa-rotate-angle": "115deg" }}
              ></i>
              <span>اعرف المزيد</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="Slide 4">
          {" "}
          <div className="card">
            <img src={ServiceImg} alt="" />
            <h3>تصميم يركز على المستخدم</h3>
            <p>في سعينا لنجاح منتجاتك، نصمم تجربة مستخدم مميزة وجذابة</p>
            <Link to="/" className="service-link">
              <i
                class="fa-solid fa-arrow-down fa-rotate-by icon"
                style={{ "--fa-rotate-angle": "115deg" }}
              ></i>
              <span>اعرف المزيد</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="5">
          {" "}
          <div className="card">
            <img src={ServiceImg} alt="" />
            <h3>تطوير تطبيقات الجوال</h3>
            <p> نقدم تطبيقات جوال مميزة تلبي احتياجاتك بأحدث التقنيات</p>
            <Link to="/" className="service-link">
              <i
                class="fa-solid fa-arrow-down fa-rotate-by icon"
                style={{ "--fa-rotate-angle": "115deg" }}
              ></i>
              <span>اعرف المزيد</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="Slide 6">
          {" "}
          <div className="card">
            <img src={ServiceImg} alt="" />
            <h3>تصميم يركز على المستخدم</h3>
            <p>في سعينا لنجاح منتجاتك، نصمم تجربة مستخدم مميزة وجذابة</p>
            <Link to="/" className="service-link">
              <i
                class="fa-solid fa-arrow-down fa-rotate-by icon"
                style={{ "--fa-rotate-angle": "115deg" }}
              ></i>
              <span>اعرف المزيد</span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurServices;