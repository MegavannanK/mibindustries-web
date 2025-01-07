import headerImage from "../../assets/export.png";
export const Header = () => {
  return (
    <div className="bg-primary-200 h-screen pt-20">
      <div className="p-5 flex gap-5 h-screen items-center">
        <div>
          <h1 className="text-primary-800 text-title-1 font-bold">
            MIB Industries
          </h1>
          <p className="text-primary-700 text-title-5 max-w-2xl">
            Connecting Worlds, Exporting Opportunities!!
          </p>
          <p className="text-primary-600  text-title-4 max-w-3xl mt-10">
            Boost global business with our highly recommended trading company.
          </p>
        </div>
        <div>
          <img
            src={headerImage.src}
            className="w-9/12 top-40 -right-[200px] absolute"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};
