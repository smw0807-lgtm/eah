import { useSearchParams } from "react-router";
import { useTopCategory } from "@/hooks/queries/useTopCategory";
import { useEffect } from "react";
import AddAuctionButton from "./AddAuctionButton";
import CategorySection from "./CategorySection";
import FilterSection from "./FilterSection";

export default function SideMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  const { data: topCategories, isLoading: isTopCategoriesLoading } =
    useTopCategory();

  useEffect(() => {
    // TODO: 카테고리 변경 시 카테고리 데이터 조회
    console.log(searchParams.get("category"));
  }, [searchParams]);

  const setFilterParams = (params: {
    sort: string;
    minPrice: number;
    maxPrice: number;
    search: string;
  }) => {
    console.log(params);
    // TODO: 필터 파라미터를 이용한 검색
  };

  return (
    <div>
      {/* 좌측 메뉴 */}
      <aside className="border-border w-64 shrink-0 border-r pr-6">
        <nav className="space-y-6">
          <AddAuctionButton />

          {/* 카테고리 섹션 */}
          <CategorySection
            isTopCategoriesLoading={isTopCategoriesLoading}
            topCategories={topCategories ?? []}
            currentCategory={currentCategory}
            setSearchParams={setSearchParams}
          />

          {/* 필터 섹션 */}
          <FilterSection setFilterParams={setFilterParams} />
        </nav>
      </aside>
    </div>
  );
}
