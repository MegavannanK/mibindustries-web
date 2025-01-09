import ourWorkImage from "../../assets/images/ourWork.png";
export const OurWork = () => {
  return (
    <div className="p-6 bg-white flex flex-col-reverse md:flex-row gap-5 w-11/12 mx-auto items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-title-8 md:text-title-3 text-primary-700 font-bold">
          Introducing Our Work
        </h2>
        <h3 className="text-body-2 md:text-title-5 font-semibold">
          Tailoring services for global exporters with personalized attention.
        </h3>
        <div className="text-body-3 md:text-title-7 flex flex-col gap-2 md:gap-10">
          <p>
            Our creativity is driven by depth study in an effort to give you the
            best result and position of your product successfully in
            international market.
          </p>
          <p>
            We’re on a mission to start studying the exact market for your
            products worldwide and establish the product in appropriate market.
          </p>
        </div>
      </div>
      <img src={ourWorkImage.src} alt="Our Work" />
    </div>
  );
};
