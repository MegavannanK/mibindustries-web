import { CLOUDINARY_BASE_URL } from "./cloudinary";

type Brand = {
  id: number;
  name: string;
  image: string;
};

export const Brands: Brand[] = [
  {
    id: 1,
    name: "Asian",
    image: `${CLOUDINARY_BASE_URL}/v1737312888/MIB-website/Homepage/Brands/sdpmlbwp2jpwefsp7j5t.png`,
  },
  {
    id: 2,
    name: "Lulu",
    image: `${CLOUDINARY_BASE_URL}/v1737312885/MIB-website/Homepage/Brands/caz1dwxmzx2flwxrpb50.png`,
  },
  {
    id: 3,
    name: "fresh fortune",
    image: `${CLOUDINARY_BASE_URL}/v1737315906/MIB-website/Homepage/Brands/uge7mmkxqe2hljrbtple.jpg`,
  },
  {
    id: 4,
    name: "East n west",
    image: `${CLOUDINARY_BASE_URL}/v1737312873/MIB-website/Homepage/Brands/gcdwrjkzvlspnk0nmcoj.png`,
  },
  {
    id: 5,
    name: "Grand",
    image: `${CLOUDINARY_BASE_URL}/v1737312877/MIB-website/Homepage/Brands/ssovut1yroppvoyyzr1f.png`,
  }, 
  {
    id: 6,
    name: "Mustafa",
    image: `${CLOUDINARY_BASE_URL}/v1737312889/MIB-website/Homepage/Brands/ryp9cnthzpi7tmh9ofje.png`,
  },
  {
    id: 7,
    name: "Narasus",
    image: `${CLOUDINARY_BASE_URL}/v1737312885/MIB-website/Homepage/Brands/caz1dwxmzx2flwxrpb50.png`,
  },
];
