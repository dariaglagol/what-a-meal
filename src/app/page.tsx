import RecipesList from '@/app/ui/RecipesList'

export default function Home({searchParams}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || '';

  return (
    <main className={'container mx-auto px-4'}>
      <RecipesList query={query}/>
    </main>
  );
}
