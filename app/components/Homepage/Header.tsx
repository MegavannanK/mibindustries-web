import headerImage from "../../assets/images/export.png";
export const Header = () => {
  return (
    <div className="bg-primary-200 h-auto md:h-screen pt-20 overflow-hidden">
      <div className="p-5 flex flex-col md:flex-row gap-5 h-[60vh] md:h-screen items-center relative">
        <div>
          <h1 className="text-primary-800 text-title-4 md:text-title-1 font-bold">
            MIB Industries
          </h1>
          <p className="text-primary-700 text-title-8 md:text-title-5 max-w-2xl">
            Connecting Worlds, Exporting Opportunities!!
          </p>
          <p className="text-primary-600 text-title-7 md:text-title-4 max-w-3xl mt-10">
            Boost global business with our highly recommended trading company.
          </p>
        </div>
        <div className="relative w-full">
          <img
            src={headerImage.src}
            className="w-full absolute md:-top-[360px]  -right-24"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};
