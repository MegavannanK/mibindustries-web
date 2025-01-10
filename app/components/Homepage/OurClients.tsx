import happyPeople from "../../assets/images/happyPeople.png";
const ourCLientData = [
  {
    count: 50,
    label: "Happy Customers",
  },
  {
    count: 10,
    label: "Partners",
  },
  {
    count: 5,
    label: "Collaborations",
  },
] as const;

export const OurClients = () => {
  return (
    <div className="bg-primary-900 px-4 py-6 h-[45vh] md:h-[50vh] overflow-hidden">
      <div className="relative">
        <div className="absolute -top-[30rem]">
          <img
            className=" opacity-20 "
            src={happyPeople.src}
            alt="Happy People"
          />
        </div>
        <div className="flex flex-col gap-5 left-1/2 -translate-x-1/2 top-[12rem] absolute">
          {ourCLientData.map((client, index) => (
            <div className="flex gap-6" key={index}>
              <p className="text-title-3 font-bold text-blue-light">
                {client.count} +
              </p>
              <p className="text-title-3 font-semibold text-white">
                {client.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
