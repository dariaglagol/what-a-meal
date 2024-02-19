import React from 'react';
import RecipesList from '@/app/ui/recipesList';

export default function Home({ searchParams }: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || '';

  return (
    <main className="container mx-auto px-4">
      <RecipesList query={query} />
    </main>
  );
}
