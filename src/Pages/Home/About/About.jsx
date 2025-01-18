import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const About = () => {
  const words = [
    "التنوع",
    "الالتزام",
    "الثقه",
    "الابتكار",
    "الاحترام",
    "الايجابيه",
  ]; // Add your desired words here
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  return (
    <div className="grid  grid-cols-12 gap-5 p-5">
      <div className="About-txt col-span-12 md:col-span-6  text-end">
        <h1 className="text-[32px] pb-4"> Aws-Gulf حول </h1>
        <p className="pb-4 text-gray-400 text-[16px]">
          تعتبر aws شركة رائدة في مجال تكامل نظم تكنولوجيا المعلومات الخدمات،
          تأسست في عام 2024 مع تركيز على تقديم حلول الأجهزة التكنولوجية
          المتطورة. إدراكًا منها للتطور المستمر في المشهد التكنولوجي واحتياجات
          السوق المتغيرة بسرعة، وسعت الشركة محفظتها لتشمل خدمات البرمجيات. لم
          يكن هذا الإضافة مجرد تحسين، بل ضرورة لتلبية متطلبات الأعمال الحديثة
          المتطورة، من خلال دمج خدمات البرمجيات، تهدف AWS GULF إلى توفير حلول
          شاملة تمكّن عملاءها من التميز في سوق تنافسية. ومع التزامها بالابتكار
          والتميز تكرس AWS GULF جهودها لتحقيق تأثير كبير من خلال تلبية وتجاوز
          توقعات العملاء.
        </p>
        <div className="About-btn flex justify-end gap-4">
          <div className="tech">
            <button className="custom-btn w-full ">التكنولوجيا</button>
            <ul className="text-gray-400 text-[16px] mt-3">
              <li>تصميم واجهات المستخدم وتجربة المستخدم</li>
              <li>
                برمجة تطبيقات الهاتف المحمول باستخدام <br />
                Flutterg Native
              </li>
              <li>حلول التجارة الإلكترونية</li>
              <li>تطوير البرمجيات المخصصة</li>
            </ul>
          </div>
          <div className="creative">
            <button className="custom-btn w-full ">الابداع</button>
            <ul className="text-gray-400 text-[16px] mt-3">
              <li>تصاميم رائدة</li>
              <li>إنشاء محتوى إبداعي</li>
              <li>تجربة مستخدم تفاعلية</li>
              <li>
                العلامات التجارية الاستراتيجية والتصميمات <br />
                الجرافيكية
              </li>
              <li>حلول مدفوعة بالذكاء الاصطناعي</li>
            </ul>
          </div>
        </div>
        <Link></Link>
      </div>
      <div className="var-words col-span-12 md:col-span-6 flex justify-center">
        <div className="word-body bg-[var(--light-green)] h-[500px]  md:h-full flex justify-center items-center w-[50%]">
          <h1 className="text-[64px] text-[var(--main-color)]">
            {words[currentWordIndex]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
