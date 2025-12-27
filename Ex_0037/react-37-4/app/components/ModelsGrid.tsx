import { Model, ModelsGridProps } from "../types";
import { ModelCard } from "./ModelCard";
import type { JSX } from 'react';

function ModelsGrid({ title, models }: ModelsGridProps) {
    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold">{title}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {models.map((model: Model): JSX.Element => <ModelCard key={model.id} model={model} />)}
            </div>
        </div>
    )
}

export { ModelsGrid };
