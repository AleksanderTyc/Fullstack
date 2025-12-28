import type { JSX } from "react";
import type { Model, IndividualCategoryPageProps } from "@/app/types";

import { getModelsBySlug } from "@/app/lib/models";
import { getCategoryNameBySlug } from "@/app/lib/categories";
import { ModelsGrid } from "@/app/components/ModelsGrid";

export default async function IndividualCategoryPage({ params }: IndividualCategoryPageProps): Promise<JSX.Element> {
  const { categoryName } = await params;
  const relevantModels: Model[] = await getModelsBySlug(categoryName);
  const relevantTitle: string = getCategoryNameBySlug(categoryName);
  return (<ModelsGrid title={relevantTitle} models={relevantModels} />);
}
