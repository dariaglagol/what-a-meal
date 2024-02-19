import React from 'react';
import { getRecipe } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';

export default async function RecipePage({ params }: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const results = await getRecipe(id);
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    name, description, thumbnail_url, tips_summary,
  } = results;

  return (
    <div className="container mx-auto px-4">
      <Breadcrumbs breadcrumbs={[
        { label: 'All recipes', href: '/' },
        {
          label: name,
          href: `/recipe/${id}`,
          active: true,
        },
      ]}
      />
      <div className="w-full lg:max-w-full flex flex-col lg:flex-row">
        <img
          src={thumbnail_url}
          alt={`${name}'s profile picture`}
          className="lg:h-auto lg:w-1/2 md:h-400 flex-none text-center overflow-hidden"
        />
        <div
          className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <h1 className="text-gray-900 font-bold text-xl mb-2">{name}</h1>
            <p className="text-gray-700 text-base">{description}</p>
            <p className="text-gray-700 text-base">{tips_summary?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
