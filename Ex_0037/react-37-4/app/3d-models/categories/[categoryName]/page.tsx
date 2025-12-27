import type { JSX } from "react";
import type { Category, IndividualCategoryPageProps } from "@/app/types";

import { getCategoryBySlug } from "@/app/lib/categories";

export default async function IndividualCategoryPage({ params }: IndividualCategoryPageProps): Promise<JSX.Element> {
  const { categoryName } = await params;
  const category: Category = getCategoryBySlug(categoryName);
  return (
    <h1>{category.slug}, {category.displayName}</h1>
  );
}
