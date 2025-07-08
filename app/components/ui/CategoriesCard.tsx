import Image from "next/image";

export const ProductCategoryCard = ({
  name,
  packs,
  onClick,
  imageUrl,
}: {
  name: string;
  packs?: number[];
  onClick?: () => void;
  imageUrl: string | undefined;
}) => {
  return (
    <div
      className="w-full max-w-sm mx-auto bg-primary-200 rounded-md shadow-md cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="p-2 relative w-full h-56 overflow-hidden rounded-t-md bg-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Image of ${name} category`}
            fill
            className="object-cover"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="rounded-b-md bg-primary-800 text-center py-4 px-4 text-primary-100  flex flex-col gap-2">
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
