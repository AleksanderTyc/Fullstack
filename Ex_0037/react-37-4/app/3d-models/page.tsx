import { getAllModels } from "@/app/lib/models";
import { ModelsGrid } from "../components/ModelsGrid";

import type { Model } from "../types";

export default async function ThreeDModelsPage() {
  const allModels: Model[] = await getAllModels();
  return (<ModelsGrid title="All MMModels" models={allModels} />);
}

/*
// Before refactor:
import { getAllModels } from "@/app/lib/models";
import { ModelCard } from '@/app/components/ModelCard';

import type { Model } from "../types";
import type { JSX } from 'react';

import Link from "next/link";

export default async function ThreeDModelsPage() {
  const allModels: Model[] = await getAllModels();
  const renderedModels: JSX.Element[] = allModels.map(
    (model: Model): JSX.Element =>
      <ModelCard key={model.id} model={model} />
  );
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">All Models</h1>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="region"
        aria-label="3D Models Gallery"
      >
        {renderedModels}
      </div>
    </div>
  );
}
*/
