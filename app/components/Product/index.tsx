import ProductCard from "./ProductCard";

export const Products = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-10">Services</h1>
        <div className="overflow-x-auto">
          <div className="flex gap-8 w-max">
            <ProductCard
              imageSrc="/export.png"
              title="Steel Products"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus."
            />
            <ProductCard
              imageSrc="/export.png"
              title="Plastic Products"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus."
            />
            <ProductCard
              imageSrc="/export.png"
              title="Cement Products"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus."
            />
            {/* Add more products here */}
            <ProductCard
              imageSrc="/export.png"
              title="Wood Products"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus."
            />
            <ProductCard
              imageSrc="/export.png"
              title="Glass Products"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus."
            />
            {/* Add more as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};
