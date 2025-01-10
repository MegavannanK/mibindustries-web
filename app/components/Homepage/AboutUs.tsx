import aboutUsImage from "../../assets/images/about-us.svg";
export const AboutUs = () => {
  return (
    //left side image right side a dive which as title and discription
    <div className="flex flex-col md:flex-row gap-5 item-center bg-primary-100 px-4 py-6">
      <img src={aboutUsImage.src} alt={aboutUsImage.src} />
      <div className="flex flex-col gap-5 md:mt-10">
        <div className="text-title-4 md:text-title-1 font-bold">
          <p className="text-primary-800">About</p>
          <h2 className="ml-6 text-primary-700">TradeLinkGlobal</h2>
        </div>
        <p className="text-title-7 md:text-title-3 font-semibold">
          Insights and Resources to help drive your Business Forward Faster.
        </p>
        <p className="text-body-2 md:text-title-7">
          We build results-oriented brand strategy and continually refine the
          campaign for the greatest outcome. From full scale branding strategy,
          we are reaching to almost desired buyers throughout the world.
        </p>
      </div>
    </div>
  );
};
