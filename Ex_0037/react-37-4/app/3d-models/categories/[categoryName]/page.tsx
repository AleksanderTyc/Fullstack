import type { JSX } from "react";
import type { Model, IndividualCategoryPageProps } from "@/app/types";

import { getModelsBySlug } from "@/app/lib/models";
import { getCategoryNameBySlug } from "@/app/lib/categories";
import { ModelsGrid } from "@/app/components/ModelsGrid";

export default async function IndividualCategoryPage({ params, searchParams }: IndividualCategoryPageProps): Promise<JSX.Element> {
  const { categoryName } = await params;
  const { query } = await searchParams;
  console.log('* I * IndividualCategoryPage', query);
  const relevantModels: Model[] = await getModelsBySlug(categoryName);
  const relevantTitle: string = getCategoryNameBySlug(categoryName);
  return (
    <>
      <form>
        <input type="text" name="query" placeholder="art, toy, ..."></input>
      </form>
      <ModelsGrid title={relevantTitle} models={relevantModels} />
    </>
  );
}
