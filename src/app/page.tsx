import RecipieList from '@/app/ui/RecipieList'

export default function Home({searchParams}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || '';

  return (
    <main className={'space-y-4'}>
      <RecipieList query={query}/>
    </main>
  );
}
