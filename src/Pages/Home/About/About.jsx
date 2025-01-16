import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="grid  grid-cols-12 gap-5 p-5">
      <div className="About-txt col-span-6 text-end">
        <h1> Aws-Gulf حول </h1>
        <p>
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
        <div className="About-btn flex">
          <div className="tech">
            <button className="custom-btn">التكنولوجيا</button>
            <ul>
              <li>تصميم واجهات المستخدم وتجربة المستخدم</li>
              <li>برمجة تطبيقات الهاتف المحمول باستخدام Flutterg Native</li>
              <li>حلول التجارة الإلكترونية</li>
              <li>تطوير البرمجيات المخصصة</li>
            </ul>
          </div>
          <div className="creative">
            <button className="custom-btn">الابداع</button>
            <ul>
              <li>تصاميم رائدة</li>
              <li>إنشاء محتوى إبداعي</li>
              <li>تجربة مستخدم تفاعلية</li>
              <li>العلامات التجارية الاستراتيجية والتصميمات الجرافيكية</li>
              <li>حلول مدفوعة بالذكاء الاصطناعي</li>
            </ul>
          </div>
        </div>
        <Link></Link>
      </div>
      <div className="var-words col-span-6">
        <div className="word-body bg-[var(--light-green)] h-full flex justify-center items-center ">
          <h1>iiuugu</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
