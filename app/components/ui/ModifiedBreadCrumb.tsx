import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

export const ModifiedBreadCrumb = ({ text }: { text: string | undefined }) => {
  const router = useRouter();
  return (
    <div className="flex gap-20 items-center py-5">
      <div
        className="bg-primary-900 px-8 py-1 rounded-lg drop-shadow-primary cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="w-6 h-6 lg:h-8 lg:w-8 text-white" />
      </div>
      {text && (
        <h1 className="text-title-7 lg:text-title-4 font-semibold text-primary-900">
          {text}
        </h1>
      )}
    </div>
  );
};
