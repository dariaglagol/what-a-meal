import RecipesList from '@/app/ui/RecipesList'

export default function Home({searchParams}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || '';

  return (
    <main className={'space-y-4'}>
      <RecipesList query={query}/>
    </main>
  );
}
