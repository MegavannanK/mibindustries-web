import headerImage from "../../assets/images/export.png";
import Container from "../ui/Container";
export const Header = () => {
  return (
    <div className="bg-primary-200 h-auto md:h-screen pt-20 overflow-hidden">
      {/* <Container> */}
      <div className="px-10 flex flex-col md:flex-row gap-5 h-[50vh] md:h-screen items-center relative">
        <div>
          <h1 className="text-primary-800 text-title-5 md:text-title-1 font-bold">
            MIB Industries
          </h1>
          <p className="text-primary-700 text-body-1 md:text-title-5 max-w-2xl">
            Connecting Worlds, Exporting Opportunities!!
          </p>
          <p className="text-primary-600 text-title-8 md:text-title-4 max-w-3xl mt-10">
            Boost global business with our highly recommended trading company.
          </p>
        </div>
        <div className="relative w-full">
          <img
            src={headerImage.src}
            className="w-full absolute md:-top-[360px]  -right-28"
            alt="Hero"
          />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};
