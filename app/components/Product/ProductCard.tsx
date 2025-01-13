import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-sky-100 rounded-xl overflow-hidden shadow-lg max-w-sm mx-auto">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover"
        width={400}
        height={300}
      />
      <div className="p-5 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
