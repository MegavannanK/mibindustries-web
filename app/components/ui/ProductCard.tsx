import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  title: string;
  description?: string;
  image: string;
  showDescription?: boolean;
  onClick?: () => void;
  variant?: "homepage" | "products";
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  showDescription = true,
  onClick,
  variant = "homepage",
}) => {
  const router = useRouter();

  const navigateToProducts = () => router.push("/products");

  const handleCardActivate = () => {
    if (variant === "homepage") navigateToProducts();
    else if (onClick) onClick();
  };

  return (
    <div
      className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 mx-auto w-[280px] sm:w-[320px] lg:w-[340px] focus:outline-none focus:ring-2 focus:ring-primary-500"
      onClick={handleCardActivate}
      role={variant === "homepage" ? "button" : undefined}
      tabIndex={variant === "homepage" ? 0 : undefined}
      onKeyDown={variant === "homepage" ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardActivate(); } } : undefined}
      aria-label={variant === "homepage" ? `View all products (current: ${title})` : undefined}
    >
      {/* Image Container - Fixed strict height to avoid layout shift */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-white flex-shrink-0 border-b border-gray-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 z-10 rounded-t-2xl pointer-events-none" />
        <Image
          unoptimized
          src={image}
          alt={title}
          fill
          className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-in-out p-6 mix-blend-multiply"
        />
      </div>

      {/* Content Section - Flex grow ensures uniform card heights */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        
        {showDescription && (
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
            {description}
          </p>
        )}

        {/* Call to action */}
        {showDescription && (
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-primary-600 font-semibold group-hover:text-primary-800 transition-colors">
            <span className="text-sm tracking-wide uppercase">
              {variant === "homepage" ? "Explore More" : "View details"}
            </span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;