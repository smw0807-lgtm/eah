import type { TopCategory } from "@/models/category";
import { Skeleton } from "../ui/skeleton";

interface CategorySectionProps {
  isTopCategoriesLoading: boolean;
  topCategories: TopCategory[];
  currentCategory: string | null;
  setSearchParams: (params: Record<string, string>) => void;
}

export default function CategorySection({
  isTopCategoriesLoading,
  topCategories,
  currentCategory,
  setSearchParams,
}: CategorySectionProps) {
  return (
    <div>
      <h2 className="text-foreground mb-3 text-lg font-semibold">카테고리</h2>
      <ul className="space-y-2">
        {isTopCategoriesLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <Skeleton className="h-10 w-full rounded-md" />
            </li>
          ))}
        {topCategories?.map((category) => (
          <li key={category.name}>
            <a
              onClick={() => setSearchParams({ category: category.code })}
              className={[
                "text-foreground hover:bg-muted block rounded-md px-3 py-2 text-sm transition-colors",
                currentCategory === category.code && "bg-muted",
                currentCategory === null &&
                  category.code === "ALL" &&
                  "bg-muted",
              ].join(" ")}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
