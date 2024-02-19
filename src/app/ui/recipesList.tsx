import React from 'react';
import { getRecipes } from '@/app/lib/data';
import Search from '@/app/ui/search';
import Card from '@/app/ui/cards';
import { Recipe } from '@/app/lib/types';

export default async function RecipesList({ query }: { query: string; }) {
  const { results } = await getRecipes(query);

  const cards = results.map((recipe: Recipe) => {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      description, tags, thumbnail_url, name, id,
    } = recipe;

    return (
      <Card
        key={id}
        description={description}
        tags={tags}
        imageUrl={thumbnail_url}
        name={name}
        id={id}
      />
    );
  });

  return (
    <div>
      <Search placeholder="Find me if you can" />
      <div className="grid grid-cols-4 gap-4">
        {cards}
      </div>
    </div>
  );
}
