import Image from "next/image";

export const ProductCategoryCard = ({
  name,
  packs,
  onClick,
}: {
  name: string;
  packs?: number[];
  onClick?: () => void;
}) => {
  return (
    <div
      className="w-full max-w-sm mx-auto bg-primary-200 rounded-md shadow-md cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="p-4">
        <Image
          src="https://res.cloudinary.com/djdlol0qe/image/upload/f_webp/v1736845886/mib-product-1.png"
          alt={`Image of ${name} category`}
          className="w-10/12 mx-auto object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div className="rounded-b-md bg-primary-800 text-center py-4 px-4 text-primary-100 text-left flex flex-col gap-2">
        <h3 className="font-bold text-body-2 sm:text-body-1 lg:text-title-8 xl:text-title-7">
          {name}
        </h3>
        {packs && (
          <h2 className="text-body-4 sm:text-body-3 lg:text-body-2 xl:text-title-8">
            Packs:{" "}
            {packs.length > 0
              ? packs.map((pack) => `${pack}kgs`).join(", ")
              : "No packs available"}
          </h2>
        )}
      </div>
    </div>
  );
};
