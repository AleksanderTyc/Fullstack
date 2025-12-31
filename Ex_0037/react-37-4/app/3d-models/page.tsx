import Form from 'next/form';

import { getAllModels } from "@/app/lib/models";
import { ModelsGrid } from "../components/ModelsGrid";

import type { Model } from "../types";

type ThreeDModelsPageParams = {
  searchParams: Promise<{ query: string }>
};

//Promise<{ [key: string]: string | string[] | undefined }>
export default async function ThreeDModelsPage({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const { query } = await searchParams;
  console.log('* I * ThreeDModelsPage', query);

  const allModels: Model[] = await getAllModels();
  let relevantModels = allModels;
  if (query !== undefined) {
    relevantModels = allModels.filter(
      model => model.name.toLowerCase().includes(query.toLowerCase())
        || model.description.toLowerCase().includes(query.toLowerCase())
    );
  }
  return (
    <>
      <Form
        className="w-full px-5 md:px-0 md:max-w-xl"
        action="/3d-models"
      >
        <input
          type="text"
          name="query"
          placeholder="art, toy, ..."
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        ></input>
      </Form>
      <ModelsGrid title="All Models" models={relevantModels} />
    </>);
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
