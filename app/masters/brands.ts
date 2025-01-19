import { CLOUDINARY_BASE_URL } from "./cloudinary";

type Brand = {
  id: number;
  name: string;
  image: string;
};

// Asian
// Lulu
// fresh fortune
// East n west
// Grand
// Mustafa
// Narasus

export const Brands = [
  {
    id: 1,
    name: "Asian",
    image: `${CLOUDINARY_BASE_URL}/v1737312885/MIB-website/Homepage/Brands/caz1dwxmzx2flwxrpb50.png`,
  },

  //@mega add for other brands as well,
];
