import experienceHeroImage from "../../assets/images/experience-hero.svg";
import customerExperienceImage from "../../assets/images/customer-satisfaction.png";
import customerImage from "../../assets/images/customer.png";
import shippingImage from "../../assets/images/shipping.png";

const stats = [
  {
    image: shippingImage,
    count: "1500+",
    label: "Consignments Done",
  },
  {
    image: customerImage,
    count: "150+",
    label: "Happy Users",
  },
  {
    image: customerExperienceImage,
    count: "10+",
    label: "Years Experience",
  },
];

export const Experience = () => {
  return (
    <div className="bg-primary-800 px-4 py-6 h-[45vh] md:h-[50vh] overflow-hidden">
      <div className="relative">
        <img
          className="md:w-full absolute md:-top-[160px] opacity-50"
          src={experienceHeroImage.src}
          alt="Hero Background"
        />
        <div
          className={`relative grid grid-cols-2 ${
            stats.length > 1 ? "md:grid-cols-3" : "justify-center"
          } gap-10 md:w-1/2 mx-auto mt-5 md:mt-20 items-center`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-[0px_4px_10px_rgba(255,255,255,0.3)] p-4 flex flex-col gap-4 md:w-[300px] md:h-56 items-center justify-between ${
                stat.label === "Happy Users" ? "md:mt-16" : ""
              }`}
            >
              <div className="bg-primary-700 h-10 w-10 md:h-20 md:w-20 flex items-center justify-center rounded-md">
                <img src={stat.image.src} alt={stat.label} className="w-12" />
              </div>
              <div className="text-center">
                <h2 className="text-primary-900 text-title-9 md:text-title-7 font-semibold">
                  {stat.count}
                </h2>
                <p className="text-body-3 md:text-title-9 text-primary-500 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
