import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import Image from "next/image"; // Importing Next.js Image component
import { success_story } from "@/app/masters/sucess_story";

// import ourWorkImage from "../../assets/images/ourWork.png";
// import happyPeople from "../../assets/images/happyPeople.png";

export const OurWork: React.FC = () => {
  // const images = [
  //   { src: ourWorkImage.src, alt: "Packing", description: "Packing Details" },
  //   { src: happyPeople.src, alt: "Shipment", description: "Shipment Details" },
  //   {
  //     src: ourWorkImage.src,
  //     alt: "Container",
  //     description: "Container Details",
  //   },
  //   {
  //     src: happyPeople.src,
  //     alt: "Manufacturing",
  //     description: "Manufacturing Details",
  //   },
  // ];
  const images = success_story
  const [currentIndex, setCurrentIndex] = useState(0); // Start at the first image
  const totalImages = images.length;

  // Auto-scroll functionality every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages); // Loop around images
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [totalImages]);

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

            {/* See More Link */}
            <div className="text-center mt-5">
              <Link
                href="/our-work-details"
                className="text-primary-700 font-semibold flex items-center justify-center hover:text-primary-800 transition-all"
              >
                See More
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full h-[400px] overflow-hidden">
          {/* Dynamically render only the current image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center">
              <Image
                src={images[currentIndex]}
                alt= "Our Brand Blue elephant"
                className="object-contain w-full h-full rounded-lg shadow-lg"
                layout="intrinsic"
                // priority={true} // Prioritize loading for better performance
                width={500} // Set a fixed width for the image
                height={300} // Set a fixed height for the image
              />
            </div>
          </div>
          <div className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
                )
              }
            >
              <ChevronLeftIcon className="w-6 h-6 text-primary-700" />
            </button>
          </div>
          <div className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer">
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
              }
            >
              <ChevronRightIcon className="w-6 h-6 text-primary-700" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
