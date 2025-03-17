import ourWorkImage from "../../assets/images/ourWork.png";
import React, { useState, useRef, useEffect } from "react";
import Container from "../ui/Container";

export const OurWork = () => {
  const images = [
    { src: ourWorkImage.src, alt: "Packing", description: "Packing Details" },
    { src: ourWorkImage.src, alt: "Shipment", description: "Shipment Details" },
    {
      src: ourWorkImage.src,
      alt: "Container",
      description: "Container Details",
    },
    {
      src: ourWorkImage.src,
      alt: "Manufacturing",
      description: "Manufacturing Details",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the second image
  const totalImages = images.length;
  const galleryRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalImages + 2)); // Loop around images
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalImages + 2));
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalImages + 2) % (totalImages + 2)
    );
  };

  // Calculate position for smooth scrolling
  const translateX = `-${(currentIndex * 100) / (totalImages + 2)}%`;

  return (
    <div className="bg-white">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto items-center">
        {/* Left-side Text Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-title-8 md:text-title-5 text-primary-700 font-bold">
            Our Success Story
          </h2>
          <h3 className="text-body-2 md:text-title-7 font-semibold">
            Tailoring services for global exporters with personalized attention.
          </h3>
          <div className="text-body-3 md:text-title-8 flex flex-col gap-2 md:gap-10">
            <p>
              Our creativity is driven by depth study in an effort to give you
              the best result and position of your product successfully in
              international market.
            </p>
            <p>
              We’re on a mission to start studying the exact market for your
              products worldwide and establish the product in appropriate
              market.
            </p>
          </div>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="relative w-full h-full" ref={galleryRef}>
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
          >
            {"<"}
          </button>

          {/* Gallery */}
          <div className="overflow-hidden h-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: translateX, // Adjust the translateX based on current index
              }}
            >
              {/* Duplicate last image at the beginning */}
              <div className="flex-shrink-0 w-full h-full flex justify-center items-center relative group">
                <img
                  src={images[totalImages - 1].src}
                  alt={images[totalImages - 1].alt}
                  className="object-contain w-full h-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-center text-lg">
                    {images[totalImages - 1].description}
                  </p>
                </div>
              </div>

              {/* Render all images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full flex justify-center items-center relative group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain w-full h-full rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-center text-lg">{image.description}</p>
                  </div>
                </div>
              ))}

              {/* Duplicate first image at the end */}
              <div className="flex-shrink-0 w-full h-full flex justify-center items-center relative group">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="object-contain w-full h-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-center text-lg">{images[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
          >
            {">"}
          </button>
        </div>
      </Container>
    </div>
  );
};
