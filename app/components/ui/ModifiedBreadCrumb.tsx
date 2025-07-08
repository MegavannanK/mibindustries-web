export const ModifiedBreadCrumb = ({ text }: { text: string | undefined }) => {
  return (
    <div className="flex gap-20 items-center py-5">
      {text && (
        <h1 className="text-title-7 lg:text-title-4 font-semibold text-primary-800 mt-5">
          {text}
        </h1>
      )}
    </div>
  );
};
