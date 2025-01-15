import { CategoriesCard } from "./ui/CategoriesCard";

export const Category = () => {
  const categoryData = [
    {
      name: "Rice",
      packs: [1, 2, 3],
    },
    {
      name: "Red Chilli",
      packs: [4, 5, 6],
    },
    {
      name: "Green Chilli",
      packs: [7, 8, 9],
    },
    {
      name: "Salt",
      packs: [10, 11, 12],
    },
    {
      name: "Sugar",
      packs: [13, 14, 15],
    },
    {
      name: "Wheat",
      packs: [16, 17, 18],
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {categoryData.map((category, index) => (
        <CategoriesCard
          key={index}
          name={category.name}
          packs={category.packs}
        />
      ))}
    </div>
  );
};
