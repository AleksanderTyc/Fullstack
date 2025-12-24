import { getAllModels } from "@/app/lib/models";
import { Model } from "../types";
import { JSX } from 'react';

export default async function ThreeDModelsPage() {
  const allModels: Model[] = await getAllModels();
  const renderedModels: JSX.Element[] = allModels.map((model: Model): JSX.Element => <li key={model.id}>{model.name}</li>);
  return (
    <main>
      <ul>
        {renderedModels}
      </ul>
    </main>
  );
}
